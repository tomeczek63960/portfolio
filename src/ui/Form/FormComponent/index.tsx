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
  const [onClear, setOnClear] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  const [refFormMessages] = useAutoAnimate() as [
    RefObject<HTMLDivElement>,
    (enabled: boolean) => void
  ];
  const updateFormData = (e: any, type: string, validation: any): void => {
    setFormData((prevValue) => ({
      ...prevValue,
      [type]: {
        value: e.target.value,
        valid: validation?.valid,
      },
    }));
  };

  const afterSubmit = (success: boolean): void => {
    if (success) {
      setMessages([
        {
          type: "success",
          message: "Wiadomość została wysłana pomyślnie",
        },
      ]);
      setFormData(initFormData);
      setOnClear(true);
      setFormDirty(false);
      setTimeout(() => {
        setOnClear(false);
      }, 10);
    } else {
      setMessages([
        {
          type: "error",
          message:
            "Wystąpił błąd podczas wysyłania wiadomości, spróbuj ponownie później",
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
          onClear={onClear}
          name="firstName"
          isFormDirty={isFormDirty}
          type="text"
          placeholder="Imię"
          validation={nameValidation}
          value={formData.firstName.value}
          onChange={(e: any, validationResult: any) =>
            updateFormData(e, "firstName", validationResult)
          }
        />
        <Input
          onClear={onClear}
          name="lastName"
          isFormDirty={isFormDirty}
          type="text"
          placeholder="Nazwisko"
          validation={surnameValidation}
          value={formData.lastName.value}
          onChange={(e: any, validationResult: any) =>
            updateFormData(e, "lastName", validationResult)
          }
        />
        <Input
          onClear={onClear}
          name="from"
          isFormDirty={isFormDirty}
          type="text"
          placeholder="E-mail"
          validation={emailValidation}
          value={formData.email.value}
          onChange={(e: any, validationResult: any) =>
            updateFormData(e, "email", validationResult)
          }
        />
        <Input
          inputType="textarea"
          onClear={onClear}
          name="message"
          isFormDirty={isFormDirty}
          type="text"
          placeholder="Wiadomość"
          validation={messageValidation}
          value={formData.message.value}
          onChange={(e: any, validationResult: any) =>
            updateFormData(e, "message", validationResult)
          }
        />
        <ButtonComponent>Submit form</ButtonComponent>
      </StyledForm>
      <StyledSuccessMessages ref={refFormMessages}>
        {messages.map((msg: { message: string; type: "success" | "error" }) => (
          <StyledSuccessMessage key={msg.message} type={msg.type}>
            {msg.message}
          </StyledSuccessMessage>
        ))}
      </StyledSuccessMessages>
    </StyledFormWrapper>
  );
};

export default ContactFormComponent;
