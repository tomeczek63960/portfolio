import type { NextPage } from 'next'
import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox';
import OfficeEmployee from "../../public/svg/office-employee.svg"
import HeadingComponent from 'src/ui/Heading';
import styled from 'styled-components';
import { variables } from 'src/styled/mixins';
import Paragraph from 'src/ui/Paragraph';
import StyledCvSection from 'src/ui/Cv';

const StyledIntroductionSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;

const Home: React.FC = () => {
  return (
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki svg
    // wszystko rozdzielić na komponenty w folderach (plik tsx ze skryptami oraz oddzielny plik z deklaracjami styli dla komponentu | oddzielny plik na typy ts | i testy)

    // globalne style dla linków (w tekstach) fioletowy lub niebieski kolor (font-wieght: 500) i underline
    // globalne style przenieść do styled components
    <>
      {/* spróbować dodać animacje na np. wykres który będzie się rysował, kwiatek który będzie rosnął itp. */}
      <StyledIntroductionSection>
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
      </StyledIntroductionSection>

      <WelcomeBox />
      <Skills />
      <WorkExperience />
      <StyledCvSection />
    </>
  )
}

export default Home
