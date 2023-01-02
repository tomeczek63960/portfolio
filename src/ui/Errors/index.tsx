import React, { FC, RefObject } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSelector } from "react-redux";
import { StyledError, StyledErrorList } from "./style";

const ComponentErrors: FC = (props) => {
  const [refErrors] = useAutoAnimate() as [
    RefObject<HTMLDivElement>,
    (enabled: boolean) => void
  ];
  const messages = useSelector((state: any) => state.errors);
  return (
    <StyledErrorList ref={refErrors}>
      {messages.errors.map((msg: any) => (
        <StyledError key={msg.id}>
          <div>{msg.error}</div>
        </StyledError>
      ))}
    </StyledErrorList>
  );
};

export default ComponentErrors;
