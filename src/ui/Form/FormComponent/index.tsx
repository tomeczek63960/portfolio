import React, { useRef, useState, FC, SyntheticEvent, RefObject } from "react";
import Input from "src/ui/Form/FormComponent/Input";
import ButtonComponent from "src/ui/Button";
import {
  nameValidation,
  emailValidation,
  surnameValidation,
  messageValidation,
} from "src/helpers/validations";
import {
  StyledForm,
  StyledSuccessMessage,
  StyledSuccessMessages,
  StyledFormWrapper,
} from "./style";
import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { TFormInputTextarea, IValidationResult } from "./Input/types";
import { IFormMessage, FormEventHandler } from "./types";
import { FormattedMessage, useIntl } from "react-intl";

const initFormData = {
  firstName: {
    value: "",
    valid: false,
  },
  lastName: {
    value: "",
    valid: false,
  },
  email: {
    value: "",
    valid: false,
  },
  message: {
    value: "",
    valid: false,
  },
};

const ContactFormComponent: FC = () => {
  const refForm = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(initFormData);
  const [isFormDirty, setFormDirty] = useState(false);
  const [messages, setMessages] = useState<IFormMessage[]>([]);
  const [refFormMessages] = useAutoAnimate() as [
    RefObject<HTMLDivElement>,
    (enabled: boolean) => void
  ];
  const intl = useIntl();

  const updateFormData = (
    e: FormEventHandler,
    type: string,
    validation: IValidationResult
  ): void => {
    const target = e.target as TFormInputTextarea;
    setFormData((prevValue) => ({
      ...prevValue,
      [type]: {
        value: target.value,
        valid: validation?.valid,
      },
    }));
  };

  const afterSubmit = (success: boolean): void => {
    if (success) {
      setMessages([
        {
          type: "success",
          message: intl.messages["form.submit.success"].toString(),
        },
      ]);
      setFormData(initFormData);
      setFormDirty(false);
    } else {
      setMessages([
        {
          type: "error",
          message: intl.messages["form.submit.error"].toString(),
        },
      ]);
    }
    setTimeout(() => {
      setMessages([]);
    }, 5000);
  };

  const onSubmit = async (e: SyntheticEvent): Promise<void> => {
    const { firstName, lastName, email, message } = formData;
    e.preventDefault();
    setFormDirty(true);
    setMessages([]);

    if (!firstName.valid || !lastName.valid || !email.valid || !message.valid) {
      setTimeout(
        () =>
          refForm.current
            ?.querySelector<HTMLInputElement>("input.error")
            ?.focus(),
        500
      );

      return;
    }
    setMessages([
      {
        type: "pending",
        message: intl.messages["form.submit.pending"].toString(),
      },
    ]);

    const res = await axios.post<{ success: boolean; errors: string[] }>(
      "/api/form",
      {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value,
      }
    );
    afterSubmit(res.data.success);
  };
  return (
    <StyledFormWrapper>
      <StyledForm ref={refForm} onSubmit={onSubmit}>
        <Input
          name="firstName"
          isFormDirty={isFormDirty}
          type="text"
          placeholder={intl.messages["form.placeholder.firstName"].toString()}
          validation={nameValidation}
          value={formData.firstName.value}
          onChange={(
            e: FormEventHandler,
            validationResult: IValidationResult
          ) => updateFormData(e, "firstName", validationResult)}
        />
        <Input
          name="lastName"
          isFormDirty={isFormDirty}
          type="text"
          placeholder={intl.messages["form.placeholder.lastName"].toString()}
          validation={surnameValidation}
          value={formData.lastName.value}
          onChange={(
            e: FormEventHandler,
            validationResult: IValidationResult
          ) => updateFormData(e, "lastName", validationResult)}
        />
        <Input
          name="from"
          isFormDirty={isFormDirty}
          type="text"
          placeholder={intl.messages["form.placeholder.email"].toString()}
          validation={emailValidation}
          value={formData.email.value}
          onChange={(
            e: FormEventHandler,
            validationResult: IValidationResult
          ) => updateFormData(e, "email", validationResult)}
        />
        <Input
          inputType="textarea"
          name="message"
          isFormDirty={isFormDirty}
          type="text"
          placeholder={intl.messages["form.placeholder.message"].toString()}
          validation={messageValidation}
          value={formData.message.value}
          onChange={(
            e: FormEventHandler,
            validationResult: IValidationResult
          ) => updateFormData(e, "message", validationResult)}
        />
        <ButtonComponent>
          <FormattedMessage id="form.submit" />
        </ButtonComponent>
      </StyledForm>
      <StyledSuccessMessages ref={refFormMessages}>
        {messages.map((msg: IFormMessage) => (
          <StyledSuccessMessage key={msg.message} type={msg.type}>
            {msg.message}
          </StyledSuccessMessage>
        ))}
      </StyledSuccessMessages>
    </StyledFormWrapper>
  );
};

export default ContactFormComponent;
