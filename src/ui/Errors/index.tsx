import React, { FC, RefObject } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";
import { StyledError, StyledErrorList } from "./style";
import { IError } from "src/store/errors";
import type { IRootState } from "src/store";

const ComponentErrors: FC = () => {
  const [refErrors] = useAutoAnimate() as [
    RefObject<HTMLDivElement>,
    (enabled: boolean) => void
  ];
  const messages = useSelector((state: IRootState) => state.errors);
  return (
    <StyledErrorList ref={refErrors}>
      {messages.errors.map((msg: IError) => (
        <StyledError key={msg.id}>
          <div>{msg.error}</div>
        </StyledError>
      ))}
    </StyledErrorList>
  );
};

export default ComponentErrors;
