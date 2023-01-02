import Image from "next/image";
import React, { FC } from "react";
import {
  StyledWelcomeBoxMessage,
  StyledWelcomeBoxMessageImage,
  StyledWelcomeBoxMessageText,
} from "../style";
import { isTruthy } from "src/helpers/checkFalsyType";
import { PropsWelcomeBoxMessage } from "./types";

const WelcomeBoxMessageComponent: FC<PropsWelcomeBoxMessage> = ({
  message,
}) => {
  return (
    <StyledWelcomeBoxMessage
      position={message.type === "user" ? "right" : "left"}
      data-scroll-to={message.toggler}
    >
      <div>
        <StyledWelcomeBoxMessageText
          position={message.type === "user" ? "right" : "left"}
          dangerouslySetInnerHTML={{ __html: message.message }}
        ></StyledWelcomeBoxMessageText>
      </div>
      <StyledWelcomeBoxMessageImage type={message.type}>
        {isTruthy(message.image) && (
          <Image src={message.image} width="100%" height="100%" />
        )}
      </StyledWelcomeBoxMessageImage>
    </StyledWelcomeBoxMessage>
  );
};

export default WelcomeBoxMessageComponent;
