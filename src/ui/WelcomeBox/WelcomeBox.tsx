import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { gsap } from "gsap";

const WelcomeBox = styled.section`
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
  height: 250px;
  overflow: auto;
  scroll-behavior: smooth;
  @media screen and (min-width: 1024px) {
    height: 350px;
  }
`;
const WelcomeBoxMessage = styled.div.attrs((props: {position?: string, writingAnimation?: boolean}) => props)`
  font-size: 11px;
  color: #cacaca;
  display: flex;
  gap: 10px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    padding-right: 60px;
    font-size: 12px;
  }
  ${
    ({ position }) => position === 'right' && css`
      justify-content: flex-end;
      padding-right: 0;
      padding-left: 15px;
      @media screen and (min-width: 768px) {
        padding-left: 60px;
        padding-right: 0;
      }
    `
  }
`;
const WelcomeBoxMessageImage = styled.div.attrs((props: {type: string}) => props)`
  margin-top: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  ${
    ({ type }) => type === 'user' ? "order: 1;" : "order: -1;"
  };
  img {
    width: 100%;
    height: 100%;
  }
`;
const WelcomeBoxMessageText = styled.div.attrs((props: {position?: string, writingAnimation?: boolean, visible?: boolean}) => props)`
  margin-top: 10px;
  padding: 8px 11px;
  background: rgb(234, 240, 246);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: #000;
  line-height: 1.4;
  width: fit-content;
  @media screen and (min-width: 768px) {
    padding: 10px 13px;
  }
  ${
    ({ position }) => position === 'right' ? "border-top-left-radius: 4px;" : "border-top-right-radius: 4px;"
  };

  @keyframes writingAnimation {
    50% {
      opacity: 0;
      transform: scale(0.7) translateY(1px);      
    }
  }

  ${
    ({ writingAnimation }) => writingAnimation && css`
      /* display: none; */
      transform: scale(0);
      opacity: 0;
      /* background: transparent; */
      span {
        width: 6px;
        height: 6px;
        background: #000;
        border-radius: 50%;
        display: inline-block;
        &:first-child {
          animation: 2s writingAnimation infinite ease-in-out;
        }
        &:nth-child(2) {
          animation: 2s writingAnimation 0.4s infinite ease-in-out;
        }
        &:nth-child(3) {
          animation: 2s writingAnimation 0.8s infinite ease-in-out;
        }
        & + span {
          margin-left: 5px;
        }
      }
    `
  }
`;
const WelcomeBoxOptions = styled.div`
  margin-top: 0px;
  padding: 20px 10px;
  h4 {
    color: black;
    font-family: Arial;
  }
  button {
    text-align: left;
    cursor: pointer;
    background-color: black;
    color: #fff;
    line-height: 1.4;
    width: fit-content;
    padding: 8px 11px;
    font-size: 11px;
    font-weight: 600;
    transition: 0.3s;
    border: 2px solid black;
    @media screen and (min-width: 768px) {
      padding: 10px 13px;
      font-size: 12px;
    }
    &[disabled] {
      pointer-events: none;
      color: #000;
      /* background-color: #23074d; */
      background-color: #eaf0f6;
      text-decoration: line-through;
    }
    &:hover {
      color: black;
      background-color: white;
    }
  }
`;
const WelcomeBoxOptionsList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const WelcomeBoxComponent = () => {
  const [activeMessages, setActiveMessages] = useState<any>([
    {
      id: 1,
      type: 'admin',
      image: '/tk.jpeg',
      message: 'Cześć <br/> Miło jest Ciebie tu widzieć',
    },
    {
      id: 1,
      type: 'admin',
      image: '',
      message: 'Co chciałbyś się o mnie dowiedzieć?',
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
      message: 'Cześć <br/> Mógłbyś powiedzieć coś o swoim doświadczeniu jako programista?'
    },
    {
      id: 3,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '/tk.jpeg',
      message: 'Jasne'
    },
    {
      id: 4,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '',
      message: 'Naukę programowania rozpocząłem w okresie kwietnia/maja 2019 roku.<br/> Od tamtej pory nieustannie powiększam swoją wiedzę na temat programowania.'
    },
    {
      id: 5,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '',
      message: 'W ciągu tego czasu udało mi się zdobyć 2 lata komercyjnego doświadczenia<br/>  Na stronie case study możesz znaleźć projekty które stworzyłem przed zdobyciem komercyjnego doświadczenia (oznaczone jako legacy code) oraz te które wykonałem specjalnie do tego portfolio (oznaczone jako new code)'
    },
    {
      id: 6,
      toggler: 'Doświadczenie',
      type: 'admin',
      image: '',
      message: 'Dostęp do repozytorium tych projektów umożliwia łatwe porównanie oraz wyciągnięcie wniosków na temat mojego progresu'
    },
    {
      id: 7,
      toggler: 'Kontakt',
      type: 'user',
      image: '/user.png',
      message: 'Jak się można z Tobą skontaktować?'
    },
    {
      id: 8,
      toggler: 'Kontakt',
      type: 'admin',
      image: '/tk.jpeg',
      message: 'To bardzo proste',
    },
    {
      id: 9,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'Jezeli jesteś rekruterem i szukasz talentów',
    },
    {
      id: 10,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'Jezeli spodobały Ci się moje projekty',
    },
    {
      id: 11,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'lub chcesz się tylko przywitać',
    },
    {
      id: 12,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'zapraszam na mój profil na Linkedin z chęcią odpowiem na wszystkie pytania :)',
    },
    {
      id: 13,
      toggler: 'Kontakt',
      type: 'admin',
      image: '',
      message: 'jezeli z jakichś powodów nie mozesz skontaktować się ze mną za pomocą linkedin mozesz zostawić wiadomość używając formularza kontaktowego',
    },
    {
      id: 14,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'user',
      image: '/user.png',
      message: 'Czy jesteś otwarty na oferty pracy?',
    },
    {
      id: 15,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'admin',
      image: '/tk.jpeg',
      message: 'Tak',
    },
    {
      id: 16,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'admin',
      image: '',
      message: 'Jestem otwarty na oferty pracy w której będę mógł rozwijać swoje umiejętności oraz zdobywać ⛰',
    },
    {
      id: 17,
      toggler: 'Czy jestem otwarty na oferty',
      type: 'admin',
      image: '',
      message: 'Najbardziej zainteresowany jestem technologiami React/Gatsby/Next jednak rozważę też propozycje w vue/Nuxt',
    },
  ]);
  const [messagesQueue, setMessagesQueue] = useState<any>([]);
  const writeAnimationWelcomeBox = useRef<any>();
  const writeAnimationWelcomeBoxImage = useRef<any>();
  const writeAnimationElement = useRef<any>();
  const writingAnimationTl = useRef<any>();
  const welcomeBoxConversation = useRef<any>();
  const welcomeBoxOptions = useRef<any>();
  let isFirst = true;
  const headInfo = {
    image: '/tk.jpeg',
    name: 'Tomasz Kardel',
    position: 'Front-end Developer'
  }
  const writeMessage = (event: React.MouseEvent<HTMLElement>, message: any) => {
    const togglerMessages = newMessages.filter((msg: any) => msg.toggler === message.toggler);
    // const target = event.target as HTMLInputElement;
    // target.setAttribute('disabled', 'true');
    const isInConversation = welcomeBoxConversation.current.querySelector(`[data-scroll-to="${message.toggler}"]`)
    if (!isInConversation) {
      setMessagesQueue((prev: any) => ([
        ...prev,
        ...togglerMessages
      ]));
    } else {
      welcomeBoxConversation.current.scrollTo(0, isInConversation.offsetTop - welcomeBoxConversation.current.offsetTop);
    }

  }
  useEffect(() => {
    welcomeBoxOptions.current.style.pointerEvents = 'all';
    if (messagesQueue.length) {
      welcomeBoxOptions.current.style.pointerEvents = 'none';
      if (messagesQueue[0].type === 'admin') {
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-start';
        writeAnimationElement.current.style.borderTopLeftRadius = '0';
        writeAnimationElement.current.style.borderTopRightRadius = '4px';
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-start';
        writeAnimationWelcomeBoxImage.current.style.order = -1;
        writeAnimationWelcomeBox.current.style.padding = '0 60px 0 0';
      } else {
        writeAnimationWelcomeBox.current.style.justifyContent = 'flex-end';
        writeAnimationElement.current.style.borderTopLeftRadius = '4px';
        writeAnimationElement.current.style.borderTopRightRadius = '0';
        writeAnimationWelcomeBoxImage.current.style.order = 1;
        writeAnimationWelcomeBox.current.style.padding = '0 0 0 60px';
      }
      writingAnimationTl.current?.play().then(() => {
        writingAnimationTl.current.seek(0).pause();
        const firstEll = messagesQueue.shift();
        setActiveMessages((prev: any) => ([
          ...prev,
          firstEll
        ]));

      });
    }
  }, [messagesQueue, activeMessages]);
  useEffect(() => {
    welcomeBoxConversation.current.scrollTo(0, welcomeBoxConversation.current.scrollHeight);
  }, [activeMessages])

  useEffect(() => {
    if (!isFirst) return;
    isFirst = false;
    writingAnimationTl.current = gsap.timeline({ paused: true });
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 1,
      })
    );
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 1
      })
    );
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0.3,
        opacity: 0,
        delay: 2.5
      })
    );
    writingAnimationTl.current.add(
      gsap.to(writeAnimationElement.current, {
        duration: 0,
        scale: 0,
      })
    );
  }, []);
  return (
    <>
      <h3>Jezeli chcesz dowiedzieć się coś o mnie</h3>
      <br />
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

        <WelcomeBoxConversation ref={welcomeBoxConversation}>
          {
            activeMessages.map((message: any) => 
              <WelcomeBoxMessage position={message.type === 'user' ? 'right' : 'left'} data-scroll-to={message.toggler}>
                <div>
                  <WelcomeBoxMessageText
                      position={message.type === 'user' ? 'right' : 'left'}
                      dangerouslySetInnerHTML={{ __html: message.message }}
                    ></WelcomeBoxMessageText>
                </div>
                <WelcomeBoxMessageImage type={message.type}>
                  {message.image && <Image src={message.image} width="100%" height="100%" />}
                </WelcomeBoxMessageImage>
              </WelcomeBoxMessage>
            )
          }

          <WelcomeBoxMessage ref={writeAnimationWelcomeBox}>
            <WelcomeBoxMessageImage ref={writeAnimationWelcomeBoxImage}></WelcomeBoxMessageImage>
            <div>
              <WelcomeBoxMessageText ref={writeAnimationElement} writingAnimation={true} visible={true}>
                <span></span>
                <span></span>
                <span></span>
              </WelcomeBoxMessageText>
            </div>
          </WelcomeBoxMessage> 

        </WelcomeBoxConversation>
          { messages.length && <WelcomeBoxOptions>
            <h4>Wybierz co Ciebie interesuje</h4>
            <WelcomeBoxOptionsList ref={welcomeBoxOptions}>
              { 
                messages.map((message) => <button key={message.toggler} onClick={(e) => writeMessage(e, message)}>{ message.toggler }</button>)
              }
            </WelcomeBoxOptionsList>
          </WelcomeBoxOptions>
          }
      </WelcomeBox>
    </>
  )
}

export default WelcomeBoxComponent;
