import type { NextPage } from 'next'
import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox/WelcomeBox';
import OfficeEmployee from "../../public/svg/office-employee.svg"
import HeadingComponent from 'src/ui/Heading/Heading';
import styled from 'styled-components';
import { responsive, colors, variables } from 'src/styled/mixins';
import Paragraph from 'src/ui/Paragraph/Paragraph';

const CvSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
const IntroductionSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
const Home: NextPage = () => {
  return (
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki svg
    // wszystko rozdzielić na komponenty w folderach (plik tsx ze skryptami oraz oddzielny plik z deklaracjami styli dla komponentu | oddzielny plik na typy ts | i testy)
    <>
      {/* spróbować dodać animacje na np. wykres który będzie się rysował, kwiatek który będzie rosnął itp. */}
      <IntroductionSection>
        <HeadingComponent tagName='h1' hoverColor="#6A82FB">
          Hi 👋<br/> 
          I’m Tomek 😊<br/> 
          Nice to see You
        </HeadingComponent>
        <OfficeEmployee />
        <Paragraph>
          Jezeli jesteś gotowy wypłynąć na nieznane wody 🐟, zapraszam na okręt 🚣🏻, Dziś będę twoim przewodnikiem
        </Paragraph>
        <Paragraph>
          Zapraszam do zapoznania się z moją pracą w która została stworzona z pasją 💜
        </Paragraph>
      </IntroductionSection>

      <WelcomeBox />
      <Skills />
      <WorkExperience />
      <CvSection>
        <HeadingComponent tagName='h2' color="#6A82FB">
          Moje CV
        </HeadingComponent>
        <h1>Sekcja do pobrania cv / lub to na oddzielną stronę wrzucić</h1>
        <h2>Jeżeli spodobała się dla Ciebie moja praca i chcesz dowiedzieć się więcej pobierz moje CV.</h2>
        <a href="/cv.pdf" download>Pobierz moje CV</a>
      </CvSection>
    </>
  )
}

export default Home
