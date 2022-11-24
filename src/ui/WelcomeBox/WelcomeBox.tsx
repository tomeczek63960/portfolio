import Image from 'next/image'
import { useEffect } from 'react'
import styled from 'styled-components'

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
const WelcomeBoxMessageText = styled.div.attrs((props: {position: string}) => props)`
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
`;

const WelcomeBoxComponent = () => {
  const messages = [
    {
      admin: {
        image: '/tk.jpeg',
        messages: [
          'Cześć <br/> Miło jest Ciebie tu widzieć',
          'Co chciałbyś się o mnie dowiedzieć?'
        ]
      },
    },
    {
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
    }
  ];
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
            <Image src="/tk.jpeg" width="100%" height="100%" />
          </WelcomeBoxImage>
          <WelcomeBoxHeadInfo>
            <WelcomeBoxHeadHeading>Tomasz Kardel</WelcomeBoxHeadHeading>
            <WelcomeBoxHeadParagraph>Front-end Developer</WelcomeBoxHeadParagraph>
          </WelcomeBoxHeadInfo>
        </WelcomeBoxHead>

        <WelcomeBoxConversation>
          <WelcomeBoxMessage>
            <WelcomeBoxMessageImage>
              <Image src="/tk.jpeg" width="100%" height="100%" />
            </WelcomeBoxMessageImage>
            <div>
              <WelcomeBoxMessageText>
                Cześć <br/>
                Miło jest Ciebie tu widzieć
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                Co chciałbyś się o mnie dowiedzieć?
              </WelcomeBoxMessageText>
              {/* Kim jestem */}
              {/*
                Nazywam się tomasz kardel i aktualnie mieszkam w Białymstoku
                Mam 23 lata z czego 4 były wypełnione programowaniem
                Posiadam 2 lata komercyjnego doświadczenia
              */}
            </div>
          </WelcomeBoxMessage>
          {/* Tutaj opcje do wyboru dla uzytkownika */}
          <WelcomeBoxMessage>
            <WelcomeBoxMessageText position="right">
              Cześć <br/>
              Mógłbyś powiedzieć coś o swoim doświadczeniu jako programista?
            </WelcomeBoxMessageText>
            <WelcomeBoxMessageImage>
              <Image src="/user.png" width="100%" height="100%" />
            </WelcomeBoxMessageImage>
          </WelcomeBoxMessage>
          <WelcomeBoxMessage>
            <WelcomeBoxMessageImage>
              <Image src="/tk.jpeg" width="100%" height="100%" />
            </WelcomeBoxMessageImage>
            <div>
              <WelcomeBoxMessageText>
                Jasne
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                Naukę programowania rozpocząłem w okresie kwietnia/maja 2019 roku.<br/> 
                Od tamtej pory nieustannie powiększam swoją wiedzę na temat programowania.
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                W ciągu tego czasu udało mi się zdobyć 2 lata komercyjnego doświadczenia<br/>
                Na stronie case study możesz znaleźć projekty które stworzyłem przed zdobyciem komercyjnego doświadczenia (oznaczone jako legacy code) oraz te które wykonałem specjalnie do tego portfolio (oznaczone jako new code)
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                Dostęp do repozytorium tych projektów umożliwia łatwe porównanie oraz wyciągnięcie wniosków na temat mojego progresu
              </WelcomeBoxMessageText>
            </div>
          </WelcomeBoxMessage>
          <WelcomeBoxMessage>
            <WelcomeBoxMessageText position="right">
              Jak się można z Tobą skontaktować?
            </WelcomeBoxMessageText>
            <WelcomeBoxMessageImage>
              <Image src="/user.png" width="100%" height="100%" />
            </WelcomeBoxMessageImage>
          </WelcomeBoxMessage>
          <WelcomeBoxMessage>
            <WelcomeBoxMessageImage>
              <Image src="/tk.jpeg" width="100%" height="100%" />
            </WelcomeBoxMessageImage>
            <div>
              <WelcomeBoxMessageText>
                To bardzo proste
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                Jezeli jesteś rekruterem i szukasz talentów
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                Jezeli spodobały Ci się moje projekty
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                lub chcesz się tylko przywitać
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                zapraszam na mój profil na Linkedin z chęcią odpowiem na wszystkie pytania :)
                {/* tutaj link do LI */}
              </WelcomeBoxMessageText>
              <WelcomeBoxMessageText>
                jezeli z jakichś powodów nie mozesz skontaktować się ze mną za pomocą linkedin mozesz zostawić wiadomość używając formularza kontaktowego 
                {/* "here link do strony kontaktu" */}
              </WelcomeBoxMessageText>
            </div>
          </WelcomeBoxMessage>
        </WelcomeBoxConversation>
      </WelcomeBox>
    </>
  )
}

export default WelcomeBoxComponent;
