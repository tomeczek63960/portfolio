import React, { FC, useState } from "react";
import HeadingComponent from "src/ui/Heading";
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

interface IMessageTogglers {
  id: number;
  toggler: string;
}
interface IMessage {
  id: number;
  type: string;
  image: string;
  message: string;
  toggler?: string;
}
const ComponentWelcomeBox: FC = () => {
  const [messages] = useState<IMessageTogglers[]>([
    {
      id: 222,
      toggler: "Doświadczenie",
    },
    {
      id: 333,
      toggler: "Kontakt",
    },
    {
      id: 444,
      toggler: "Czy jestem otwarty na oferty",
    },
  ]);
  const [newMessages] = useState<IMessage[]>([
    {
      id: 2,
      toggler: "Doświadczenie",
      type: "user",
      image: "/user.png",
      message:
        "Cześć <br/> Mógłbyś powiedzieć coś o swoim doświadczeniu jako programista?",
    },
    {
      id: 3,
      toggler: "Doświadczenie",
      type: "admin",
      image: "/tk.jpeg",
      message: "Jasne",
    },
    {
      id: 4,
      toggler: "Doświadczenie",
      type: "admin",
      image: "",
      message:
        "Naukę programowania rozpocząłem w okresie kwietnia/maja 2019 roku.<br/> Od tamtej pory nieustannie powiększam swoją wiedzę na temat programowania.",
    },
    {
      id: 5,
      toggler: "Doświadczenie",
      type: "admin",
      image: "",
      message:
        "W ciągu tego czasu udało mi się zdobyć 2 lata komercyjnego doświadczenia<br/>  Na stronie case study możesz znaleźć projekty które stworzyłem przed zdobyciem komercyjnego doświadczenia (oznaczone jako legacy code) oraz te które wykonałem specjalnie do tego portfolio (oznaczone jako new code)",
    },
    {
      id: 6,
      toggler: "Doświadczenie",
      type: "admin",
      image: "",
      message:
        "Dostęp do repozytorium tych projektów umożliwia łatwe porównanie oraz wyciągnięcie wniosków na temat mojego progresu",
    },
    {
      id: 7,
      toggler: "Kontakt",
      type: "user",
      image: "/user.png",
      message: "Jak się można z Tobą skontaktować?",
    },
    {
      id: 8,
      toggler: "Kontakt",
      type: "admin",
      image: "/tk.jpeg",
      message: "To bardzo proste",
    },
    {
      id: 9,
      toggler: "Kontakt",
      type: "admin",
      image: "",
      message: "Jezeli jesteś rekruterem i szukasz talentów",
    },
    {
      id: 10,
      toggler: "Kontakt",
      type: "admin",
      image: "",
      message: "Jezeli spodobały Ci się moje projekty",
    },
    {
      id: 11,
      toggler: "Kontakt",
      type: "admin",
      image: "",
      message: "lub chcesz się tylko przywitać",
    },
    {
      id: 12,
      toggler: "Kontakt",
      type: "admin",
      image: "",
      message:
        "zapraszam na mój profil na Linkedin z chęcią odpowiem na wszystkie pytania :)",
    },
    {
      id: 13,
      toggler: "Kontakt",
      type: "admin",
      image: "",
      message:
        "jezeli z jakichś powodów nie mozesz skontaktować się ze mną za pomocą linkedin mozesz zostawić wiadomość używając formularza kontaktowego",
    },
    {
      id: 14,
      toggler: "Czy jestem otwarty na oferty",
      type: "user",
      image: "/user.png",
      message: "Czy jesteś otwarty na oferty pracy?",
    },
    {
      id: 15,
      toggler: "Czy jestem otwarty na oferty",
      type: "admin",
      image: "/tk.jpeg",
      message: "Tak",
    },
    {
      id: 16,
      toggler: "Czy jestem otwarty na oferty",
      type: "admin",
      image: "",
      message:
        "Jestem otwarty na oferty pracy w której będę mógł rozwijać swoje umiejętności oraz zdobywać ⛰",
    },
    {
      id: 17,
      toggler: "Czy jestem otwarty na oferty",
      type: "admin",
      image: "",
      message:
        "Najbardziej zainteresowany jestem technologiami React/Gatsby/Next jednak rozważę też propozycje w vue/Nuxt",
    },
  ]);

  const headInfo = {
    image: "/tk.jpeg",
    name: "Tomasz Kardel",
    position: "Front-end Developer",
  };

  const {
    activeMessages,
    refWriteAnimationWelcomeBox,
    refWriteAnimationWelcomeBoxImage,
    refWriteAnimationElement,
    refWelcomeBoxConversation,
    refWelcomeBoxOptions,
    writeMessage,
  } = useWelcomeBoxAnimation(newMessages);

  return (
    <StyledWelcomeBoxSection>
      <HeadingComponent tagName="h2" color="#6A82FB">
        About Me
      </HeadingComponent>
      <Paragraph>Co chcesz się o mnie dowiedzieć?</Paragraph>
      <StyledWelcomeBox>
        <WelcomeBoxHead {...headInfo} />

        <StyledWelcomeBoxConversation ref={refWelcomeBoxConversation}>
          {activeMessages.map((message: any) => (
            <WelcomeBoxMessageComponent
              message={message}
              key={message.message}
            />
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
        {isTruthy(messages.length) && (
          <StyledWelcomeBoxOptions>
            <h4>Wybierz co Ciebie interesuje</h4>
            <StyledWelcomeBoxOptionsList ref={refWelcomeBoxOptions}>
              {messages.map((message: any) => (
                <button
                  key={message.toggler}
                  onClick={(e) => writeMessage(e, message)}
                >
                  {message.toggler}
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
