import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { gsap } from "gsap";

const WelcomeBox = styled.section`
  /* display: flex; */
  /* gap: 20px; */
  background: white;
  border-radius: 5px;
  overflow: hidden;
`;
const WelcomeBoxHead = styled.div`
  background: linear-gradient(-225deg, rgb(117, 93, 213) 35%, rgb(55, 136, 209) 100%);
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
`;
const WelcomeBoxHeadHeading = styled.h4`
  font-size: 16px;
  line-height: 1.3;
`;
const WelcomeBoxHeadParagraph = styled.p`
  font-size: 11px;
  line-height: 1;
`;
const WelcomeBoxHeadInfo = styled.div`
  color: #fff;
  font-family: Arial;
`;
const WelcomeBoxImage = styled.div`
  /* display: none; */
  width: 40px!important;
  height: 40px!important;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WelcomeBoxConversation = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
`;
const WelcomeBoxMessage = styled.div.attrs((props: {position?: string, writingAnimation?: boolean}) => props)`
  font-size: 12px;
  color: #cacaca;
  display: flex;
  gap: 10px;
  padding-right: 60px;
  ${
    ({ position }) => position === 'right' && css`
      padding-right: 0;
      padding-left: 60px;
      justify-content: flex-end;
    `
  }
`;
const WelcomeBoxMessageImage = styled.div.attrs((props: {type: string}) => props)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  ${
    ({ type }) => type === 'user' ? "order: 1;" : "order: -1;"
  };
  img {
    width: 100%;
    height: 100%;
  }
`;
const WelcomeBoxMessageText = styled.div.attrs((props: {position?: string, writingAnimation?: boolean}) => props)`
  margin-top: 10px;
  padding: 10px 13px;
  background: rgb(234, 240, 246);
  
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #000;
  line-height: 1.4;
  width: fit-content;
  ${
    ({ position }) => position === 'right' ? "border-top-left-radius: 4px;" : "border-top-right-radius: 4px;"
  };

  @keyframes writingAnimation {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  ${
    ({ writingAnimation }) => writingAnimation && css`
      /* display: none; */
      transform: scale(0);
      opacity: 0;
      span {
        width: 6px;
        height: 6px;
        background: #000;
        border-radius: 50%;
        display: inline-block;
        &:first-child {
          animation: 1s writingAnimation infinite;
        }
        &:nth-child(2) {
          animation: 1s writingAnimation 0.3s infinite;
        }
        &:nth-child(3) {
          animation: 1s writingAnimation 0.5s infinite;
        }
        & + span {
          margin-left: 5px;
        }
      }
    `
  }
`;
const WelcomeBoxOptions = styled.div`
  margin-top: 80px;
  h4 {
    color: black;
  }
  button {
    background: #eaeaea;
    color: black;
    padding: 5px;
    cursor: pointer;
  }
`;
const WelcomeBoxOptionsList = styled.div`
  display: flex;
  gap: 20px;
`;
const WelcomeBoxComponent = () => {
  const [activeMessages, setActiveMessages] = useState<any>([
    {
      id: 1,
      type: 'admin',
      image: '/tk.jpeg',
      messages: [
        {
          message: 'Cześć <br/> Miło jest Ciebie tu widzieć',
          visible: true
        },
        {
          message: 'Co chciałbyś się o mnie dowiedzieć?',
          visible: true
        },
      ]
    },
  ]);
  const [messages, setMessages] = useState<any>([
    {
      id: 222,
      toggler: 'Doświadczenie'
    },
    {
      id: 333,
      toggler: 'Kontakt'
    },
    {
      id: 444,
      toggler: 'Czy jestem otwarty na oferty'
    },
  ]);
  const [newMessages, setNewMessages] = useState<any>([
    {
      id: 2,
      toggler: 'Doświadczenie',
      type: 'user',
      image: '/user.png',
      messages: [
        {
          message: 'Cześć <br/> Mógłbyś powiedzieć coś o swoim doświadczeniu jako programista?',
          visible: false
        }
      ]
    },
    {
      id: 3,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '/tk.jpeg',
      messages: [
        {
          message: 'Jasne',
          visible: false
        },
        {
          message: 'Naukę programowania rozpocząłem w okresie kwietnia/maja 2019 roku.<br/> Od tamtej pory nieustannie powiększam swoją wiedzę na temat programowania.',
          visible: false
        },
        {
          message: 'W ciągu tego czasu udało mi się zdobyć 2 lata komercyjnego doświadczenia<br/>  Na stronie case study możesz znaleźć projekty które stworzyłem przed zdobyciem komercyjnego doświadczenia (oznaczone jako legacy code) oraz te które wykonałem specjalnie do tego portfolio (oznaczone jako new code)',
          visible: false
        },
        {
          message: 'Dostęp do repozytorium tych projektów umożliwia łatwe porównanie oraz wyciągnięcie wniosków na temat mojego progresu',
          visible: false
        }
      ]
    },
    {
      id: 4,
      toggler: 'Kontakt',
      type: 'user',
      image: '/user.png',
      messages: [
        {
          message: 'Jak się można z Tobą skontaktować?',
          visible: false
        }
      ]
    },
    {
      id: 5,
      toggler: 'Kontakt',
      type: 'admin',
      image: '/tk.jpeg',
      messages: [
        {
          message: 'To bardzo proste',
          visible: false
        },
        {
          message: 'Jezeli jesteś rekruterem i szukasz talentów',
          visible: false
        },
        {
          message: 'Jezeli spodobały Ci się moje projekty',
          visible: false
        },
        {
          message: 'lub chcesz się tylko przywitać',
          visible: false
        },
        {
          message: 'zapraszam na mój profil na Linkedin z chęcią odpowiem na wszystkie pytania :)',
          visible: false
        },
        {
          message: 'jezeli z jakichś powodów nie mozesz skontaktować się ze mną za pomocą linkedin mozesz zostawić wiadomość używając formularza kontaktowego',
          visible: false
        },
      ]
    },
    {
      id: 6,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'user',
      image: '/user.png',
      messages: [
        {
          message: 'Czy jesteś otwarty na oferty pracy?',
          visible: false
        },
      ]
    },
    {
      id: 7,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'admin',
      image: '/tk.jpeg',
      messages: [
        {
          message: 'Tak',
          visible: false
        },
        {
          message: 'Jestem otwarty na oferty pracy w której będę mógł rozwijać swoje umiejętności oraz zdobywać ⛰',
          visible: false
        },
        {
          message: 'Najbardziej zainteresowany jestem technologiami React/Gatsby/Next jednak rozważę też propozycje w vue/Nuxt',
          visible: false
        }
      ]
    },
  ]);
  const [messagesQueue, setMessagesQueue] = useState<any>([]);
  const writeAnimationElement = useRef<any>();
  const writingAnimationTl = useRef<any>();
  let isFirst = true;
  const headInfo = {
    image: '/tk.jpeg',
    name: 'Tomasz Kardel',
    position: 'Front-end Developer'
  }
  const writeMessage = (message: any) => {
    // console.log(message);
    const togglerMessages = newMessages.filter((msg: any) => msg.toggler === message.toggler);
    console.log(togglerMessages);

    // writingAnimationTl.current.play().then(() => {
    //   writingAnimationTl.current.seek(0).pause();
      setMessagesQueue((prev: any) => ([
        ...prev,
        ...togglerMessages
      ]));
    // });
  }
  useEffect(() => {
    if (messagesQueue.length) {
      writingAnimationTl.current?.play().then(() => {
        writingAnimationTl.current.seek(0).pause();
        const firstEll = messagesQueue.shift()
        setActiveMessages((prev: any) => ([
          ...prev,
          firstEll
        ]));
      });
    }
    // tutaj update i nowo update tl na queue
    console.log(messagesQueue, activeMessages, 'he')
  }, [messagesQueue, activeMessages]);
  useEffect(() => {
    if (!isFirst) return;
    isFirst = false;
    writingAnimationTl.current = gsap.timeline({ paused: true });
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        scale: 1,
        opacity: 1
      })
    );
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        scale: 0,
        opacity: 0,
        delay: 2.5
      })
    );
    
  }, []);
  return (
    <>
      {/* 
        przy kliknięciu opcji wysłania odemnie wiadomości puszczać dźwięk wiadomości z Linkedina
        po wybraniu opcji przez uzytkownika animacja 3 kropek pisania i dopiero po chwili pokazanie faktyczej wiadomosci
      */}
      <WelcomeBox>
        <WelcomeBoxHead>
          <WelcomeBoxImage>
            <Image src={headInfo.image} width="100%" height="100%" />
          </WelcomeBoxImage>
          <WelcomeBoxHeadInfo>
            <WelcomeBoxHeadHeading>{headInfo.name}</WelcomeBoxHeadHeading>
            <WelcomeBoxHeadParagraph>{headInfo.position}</WelcomeBoxHeadParagraph>
          </WelcomeBoxHeadInfo>
        </WelcomeBoxHead>

        <WelcomeBoxConversation>
          {
            activeMessages.map((message: any) => <>
              <WelcomeBoxMessage position={message.type === 'user' ? 'right' : 'left'}>
                <div>
                  { message.messages.map((msg: any) =>
                    <WelcomeBoxMessageText position={message.type === 'user' ? 'right' : 'left'} dangerouslySetInnerHTML={{ __html: msg.message }}></WelcomeBoxMessageText>
                  )}
                </div>
                <WelcomeBoxMessageImage type={message.type}>
                  <Image src={message.image} width="100%" height="100%" />
                </WelcomeBoxMessageImage>
              </WelcomeBoxMessage>
              </>
            )
          }

          <WelcomeBoxMessage>
            <WelcomeBoxMessageImage>
              {/* <Image src={message.admin.image} width="100%" height="100%" /> */}
            </WelcomeBoxMessageImage>
            <div>
              <WelcomeBoxMessageText ref={writeAnimationElement} writingAnimation={true}>
                <span></span>
                <span></span>
                <span></span>
              </WelcomeBoxMessageText>
            </div>
          </WelcomeBoxMessage> 

          { messages.length && <WelcomeBoxOptions>
              <h4>Wybierz co Ciebie interesuje</h4>
              <WelcomeBoxOptionsList>
                { 
                  messages.map((message) => <button key={message.toggler} onClick={() => writeMessage(message)}>{ message.toggler }</button>)
                }
              </WelcomeBoxOptionsList>
            </WelcomeBoxOptions>
          }

        </WelcomeBoxConversation>
      </WelcomeBox>
    </>
  )
}

export default WelcomeBoxComponent;
