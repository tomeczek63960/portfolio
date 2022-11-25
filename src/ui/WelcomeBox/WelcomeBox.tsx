import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

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
const WelcomeBoxMessage = styled.div`
  font-size: 12px;
  color: #cacaca;
  display: flex;
  gap: 10px;
  padding-right: 60px;
  &:nth-child(2n) {
    padding-right: 0;
    padding-left: 60px;
    justify-content: flex-end;
    /* text-align: right; */
  }
`;
const WelcomeBoxMessageImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
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
      span {
        width: 6px;
        height: 6px;
        background: #000;
        border-radius: 50%;
        display: inline-block;
        &:first-child {
          animation: 2s writingAnimation infinite;
        }
        &:nth-child(2) {
          animation: 2s writingAnimation 0.3s infinite;
        }
        &:nth-child(3) {
          animation: 2s writingAnimation 0.5s infinite;
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
      admin: {
        image: '/tk.jpeg',
        messages: [
          'Cześć <br/> Miło jest Ciebie tu widzieć',
          'Co chciałbyś się o mnie dowiedzieć?'
        ]
      },
    },
  ]);
  const [messages, setMessages] = useState<any>([
    // {
    //   admin: {
    //     image: '/tk.jpeg',
    //     messages: [
    //       'Cześć <br/> Miło jest Ciebie tu widzieć',
    //       'Co chciałbyś się o mnie dowiedzieć?'
    //     ]
    //   },
    // },
    {
      id: 2,
      toggler: 'Doświadczenie',
      user: {
        image: '/user.png',
        messages: [
          'Cześć <br/> Mógłbyś powiedzieć coś o swoim doświadczeniu jako programista?'
        ]
      },
      admin: {
        image: '/tk.jpeg',
        messages: [
          'Jasne',
          'Naukę programowania rozpocząłem w okresie kwietnia/maja 2019 roku.<br/> Od tamtej pory nieustannie powiększam swoją wiedzę na temat programowania.',
          'W ciągu tego czasu udało mi się zdobyć 2 lata komercyjnego doświadczenia<br/>  Na stronie case study możesz znaleźć projekty które stworzyłem przed zdobyciem komercyjnego doświadczenia (oznaczone jako legacy code) oraz te które wykonałem specjalnie do tego portfolio (oznaczone jako new code)',
          'Dostęp do repozytorium tych projektów umożliwia łatwe porównanie oraz wyciągnięcie wniosków na temat mojego progresu'
        ]
      }
    },
    {
      id: 3,
      toggler: 'Kontakt',
      user: {
        image: '/user.png',
        messages: [
          'Jak się można z Tobą skontaktować?'
        ]
      },
      admin: {
        image: '/tk.jpeg',
        messages: [
          'To bardzo proste',
          'Jezeli jesteś rekruterem i szukasz talentów',
          'Jezeli spodobały Ci się moje projekty',
          'lub chcesz się tylko przywitać',
          'zapraszam na mój profil na Linkedin z chęcią odpowiem na wszystkie pytania :)',
          // {/* tutaj link do LI */}
          'jezeli z jakichś powodów nie mozesz skontaktować się ze mną za pomocą linkedin mozesz zostawić wiadomość używając formularza kontaktowego',
          // "here link do strony kontaktu"
        ]
      }
    },
    {
      id: 4,
      toggler: 'Czy jestem otwarty na oferty',
      user: {
        image: '/user.png',
        messages: [
          'Czy jesteś otwarty na oferty pracy?'
        ]
      },
      admin: {
        image: '/tk.jpeg',
        messages: [
          'Tak',
          'Jestem otwarty na oferty pracy w której będę mógł rozwijać swoje umiejętności oraz zdobywać ⛰',
          'Najbardziej zainteresowany jestem technologiami React/Gatsby/Next jednak rozważę też propozycje w vue/Nuxt'
        ]
      }
    },
  ])
  let isFirst = true;
  const headInfo = {
    image: '/tk.jpeg',
    name: 'Tomasz Kardel',
    position: 'Front-end Developer'
  }
  const writeMessage = (message: any) => {
    console.log(message);
    setActiveMessages((prev: any) => ([
      ...prev,
      message
    ] ));
    const newMessagesArray = messages.filter((msg) => msg.id !== message.id);
    console.log(newMessagesArray)
    setMessages(newMessagesArray);
  }
  useEffect(() => {
    if (!isFirst) return;
    isFirst = false;
    // setActiveMessages((prev: any) => ([
    //   ...prev,
    //   ...messages
    // ] ))
  }, []);
  return (
    <>
      {/* 
        Welcome info to zdjęcie 50% border-radius 
        odwzorowanie messengera, po wczytaniu strony pojawia się chmurka obok zdjęcia z przywitaniem
        oraz zachęcająca do kliknięcia
        po kliknięciu otwiera się popup z informacjami o mnie (kim jestem, itp.)
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
              { message.user ? <WelcomeBoxMessage>
                  { message.user.messages.map((msg: any) =>
                    <WelcomeBoxMessageText position="right" dangerouslySetInnerHTML={{ __html: msg }}></WelcomeBoxMessageText>
                  )}
                  <WelcomeBoxMessageImage>
                    <Image src={message.user.image} width="100%" height="100%" />
                  </WelcomeBoxMessageImage>
                </WelcomeBoxMessage> : ""
              }
              { message.admin && <WelcomeBoxMessage>
                  <WelcomeBoxMessageImage>
                    <Image src={message.admin.image} width="100%" height="100%" />
                  </WelcomeBoxMessageImage>
                  <div>
                    { message.admin.messages.map((msg: any) =>
                      <WelcomeBoxMessageText dangerouslySetInnerHTML={{ __html: msg }}></WelcomeBoxMessageText>
                    )}
                  </div>
                </WelcomeBoxMessage> 
              }
              </>
            )
          }

          <WelcomeBoxMessage>
            <WelcomeBoxMessageImage>
              {/* <Image src={message.admin.image} width="100%" height="100%" /> */}
            </WelcomeBoxMessageImage>
            <div>
              <WelcomeBoxMessageText writingAnimation={true}>
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
