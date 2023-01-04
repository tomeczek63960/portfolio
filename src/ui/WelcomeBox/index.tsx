import React, { FC, useState, RefObject } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import {
  StyledWelcomeBoxSection,
  StyledWelcomeBox,
  StyledWelcomeBoxConversation,
  StyledWelcomeBoxMessage,
  StyledWelcomeBoxMessageImage,
  StyledWelcomeBoxMessageText,
  StyledWelcomeBoxOptions,
  StyledWelcomeBoxOptionsList,
} from "./style";
import { isTruthy } from "src/helpers/checkFalsyType";
import WelcomeBoxMessageComponent from "./WelcomeBoxMessage";
import WelcomeBoxHead from "./WelcomeBoxHead";
import { useWelcomeBoxAnimation } from "src/hooks/useWelcomeBoxAnimation";
import {
  IStrapiWelcomeboxMessage,
  IStrapiWelcomeboxToggler,
  PropsWelcomeBox,
} from "./types";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";

const ComponentWelcomeBox: FC<PropsWelcomeBox> = ({ content }) => {
  const [togglerMessages] = useState<IStrapiWelcomeboxToggler[]>(
    content.WelcomeBoxMessageToggler
  );

  const [newMessages] = useState<IStrapiWelcomeboxMessage[]>(
    content.new_messages
  );
  const [activeMessages, setActiveMessages] = useState<
    IStrapiWelcomeboxMessage[]
  >(content.active_messages);
  const [refWelcomeBoxConversation] = useAutoAnimate() as [
    RefObject<HTMLDivElement>,
    (enabled: boolean) => void
  ];

  const {
    refWriteAnimationWelcomeBox,
    refWriteAnimationWelcomeBoxImage,
    refWriteAnimationElement,
    refWelcomeBoxOptions,
    writeMessage,
  } = useWelcomeBoxAnimation(
    newMessages,
    refWelcomeBoxConversation,
    activeMessages,
    setActiveMessages
  );

  return (
    <StyledWelcomeBoxSection id="WelcomeBox">
      <Heading heading={content.Heading} />
      {content.Paragraph.map((paragraph: IStrapiParagraphText) => (
        <Paragraph key={paragraph.id}>{paragraph.Text}</Paragraph>
      ))}
      <StyledWelcomeBox>
        <WelcomeBoxHead
          name={content.HeadName}
          position={content.HeadPosition}
          image={content.Image.url}
        />

        <StyledWelcomeBoxConversation ref={refWelcomeBoxConversation}>
          {activeMessages.map((message: IStrapiWelcomeboxMessage) => (
            <WelcomeBoxMessageComponent message={message} key={message.id} />
          ))}

          <StyledWelcomeBoxMessage ref={refWriteAnimationWelcomeBox}>
            <StyledWelcomeBoxMessageImage
              ref={refWriteAnimationWelcomeBoxImage}
            ></StyledWelcomeBoxMessageImage>
            <div>
              <StyledWelcomeBoxMessageText
                ref={refWriteAnimationElement}
                writingAnimation={true}
                visible={true}
              >
                <span></span>
                <span></span>
                <span></span>
              </StyledWelcomeBoxMessageText>
            </div>
          </StyledWelcomeBoxMessage>
        </StyledWelcomeBoxConversation>
        {isTruthy(togglerMessages.length) && (
          <StyledWelcomeBoxOptions>
            <h4>{content.BottomText}</h4>
            <StyledWelcomeBoxOptionsList ref={refWelcomeBoxOptions}>
              {togglerMessages.map((toggler: IStrapiWelcomeboxToggler) => (
                <button
                  key={toggler.id}
                  onClick={(e) => writeMessage(e, toggler)}
                >
                  {toggler.Name}
                </button>
              ))}
            </StyledWelcomeBoxOptionsList>
          </StyledWelcomeBoxOptions>
        )}
      </StyledWelcomeBox>
    </StyledWelcomeBoxSection>
  );
};

export default ComponentWelcomeBox;
