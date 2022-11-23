import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import Button from 'src/ui/Button'
import Skills from 'src/ui/Skills'
import WorkExperience from 'src/ui/WorkExperience'
import styled from 'styled-components'

const WelcomeBox = styled.div`
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
  &:nth-child(2n) {
    justify-content: flex-end;
    text-align: right;
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

const Home: NextPage = () => {
  return (
    // przy kazdym przejsciu strony robić auto scroll do samej góry
    // dodać sekcję about me 
    // dodać stronę cv z mozliwością pobrania jako pdf
    // do animacji głównej dodać 2 kólki (created with) (passion)
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki
    // do animacji głównej dodać opis function initialAnimation() {} z buttonem run initialAniamtion()
    // zrobić white/dark mode jako przełącznik (jako zagięta kartka w prawym górym rogu - w kolorze przeciwnym do aktualnie wyświetlanego zeby zrobić kontrast)

    // (desktop) - prawa strona (biała) - nawigacja (lista punktów nawigacji na desktopie)
    // (desktop) - lewa strona (czarna) - kontent (ograniczyć szerokość tylko do zeby było do czarnego pola)
    // (desktop) - animacja przejścia stron (mozna zrobić ze po przejsciu na inną stronę )

    // zamiast zwykłego scrolla dodać stronnicowanie tak coś w podobie do tego https://olaolu.dev/ (scroll będzie tylko na lewej stronie na czarnym tle / prawa strona biała będzie na fixed)

    // pierwsza opcja
    //    -- kontent idzie na opacity 0
    //    -- (pierwszy krok) lewa strona (czarna) - zostaje pokryta białym kolorem
    //    -- (pierwszy krok) prawa strona (biała) - zostaje pokryta czarnym kolorem 

    //    -- (drugi krok) lewa strona (czarna) - zostaje pokryta spowrotem pierwotnym kolorem
    //    -- (drugi krok) prawa strona (biała) - zostaje pokryta spowrotem pierwotnym kolorem 
    //    -- kontent idzie opacity 1
    
    // druga opcja 
    //    -- kontent idzie na opacity 0

    //    -- odwracamy paletę kolorów (po przejściu lewa strona zmienia się z prawą bazowym kolorem)    
    //    -- (pierwszy krok) lewa strona (czarna) - zostaje pokryta białym kolorem
    //    -- (pierwszy krok) prawa strona (biała) - zostaje pokryta czarnym kolorem 
    
    //    -- kontent idzie opacity 1
    <>
      {/* 
        Welcome info to zdjęcie 50% border-radius 
        odwzorowanie messengera, po wczytaniu strony pojawia się chmurka obok zdjęcia z przywitaniem
        oraz zachęcająca do kliknięcia
        po kliknięciu otwiera się popup z informacjami o mnie (kim jestem, itp.)
        przy kliknięciu opcji wysłania odemnie wiadomości puszczać dźwięk wiadomości z Linkedina

        po wybraniu opcji przez uzytkownika animacja 3 kropek pisania i dopiero po chwili pokazanie faktyczej wiadomosci
      */}
      <h1>Sekcja przywitania (zdjęcie)</h1>
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
              {/* Jak mozna się ze mną skontaktować */}
              {/*
                To bardzo proste
                Jezeli jesteś rekruterem i szukasz talentów
                Jezeli spodobały Ci się moje projekty
                a nawet gdy chcesz się tylko przywitać
                zapraszam na mój profil na Linkedin z chęcią odpowiem na wszystkie pytania :)
                jezeli z jakichś powodów nie mozesz skontaktować się ze mną przez linkedin mozesz zostawić wiadomość przez formularz kontaktowy "here link do strony kontaktu"
              */}
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
              Jak mogę się z tobą skontaktować?
            </WelcomeBoxMessageText>
            <WelcomeBoxMessageImage>
              <Image src="/user.png" width="100%" height="100%" />
            </WelcomeBoxMessageImage>
          </WelcomeBoxMessage>
        </WelcomeBoxConversation>
      </WelcomeBox>
      <Button />
      
      <h1>Stack technologiczny</h1>
      <Skills />
      <br/>
      <h1>Doświadczenie zawodowe</h1>
      <WorkExperience />
      <br/>
      <h1>Sekcja do pobrania cv / lub to na oddzielną stronę wrzucić</h1>
    </>
  )
}

export default Home
