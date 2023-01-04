import Image from "src/ui/Image";
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
      position={message.Type === "user" ? "right" : "left"}
      data-scroll-to={message.Toggler}
    >
      <div>
        <StyledWelcomeBoxMessageText
          position={message.Type === "user" ? "right" : "left"}
          dangerouslySetInnerHTML={{ __html: message.Message }}
        ></StyledWelcomeBoxMessageText>
      </div>
      <StyledWelcomeBoxMessageImage type={message.Type}>
        {isTruthy(message.Image) && <Image url={message.Image.url} />}
      </StyledWelcomeBoxMessageImage>
    </StyledWelcomeBoxMessage>
  );
};

export default WelcomeBoxMessageComponent;
