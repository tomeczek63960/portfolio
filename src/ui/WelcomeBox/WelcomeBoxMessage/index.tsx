import Image from "next/image";
import React, { FC } from "react";
import {
  StyledWelcomeBoxMessage,
  StyledWelcomeBoxMessageImage,
  StyledWelcomeBoxMessageText,
} from "../style";
import { isTruthy } from "src/helpers/checkFalsyType";

interface WelcomeBoxMessage {
  type: string;
  toggler?: string;
  message: string;
  image: string;
}
interface WelcomeBoxMessageProps {
  message: WelcomeBoxMessage;
}

const WelcomeBoxMessageComponent: FC<WelcomeBoxMessageProps> = ({
  message,
}) => {
  return (
    <StyledWelcomeBoxMessage
      key={Math.random() * 100000}
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
