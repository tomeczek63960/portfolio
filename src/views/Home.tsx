import type { NextPage } from 'next'
import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox';
import OfficeEmployee from "../../public/svg/office-employee.svg"
import HeadingComponent from 'src/ui/Heading';
import styled from 'styled-components';
import { responsive, colors, variables } from 'src/styled/mixins';
import Paragraph from 'src/ui/Paragraph';
import Pdf from '../../public/svg/pdf.svg';
import Download from '../../public/svg/download.svg';

const CvSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
const StyledIntroductionSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
const Exp = styled.section.attrs((props: {position: string}) => props)`
  padding-block: ${variables.sectionVerticalPadding};
  position: relative;
	width: 1050px;
	/* transform: skewY(5deg); */
  transform: ${({ position }) => position === 'left' ? 'skewY(-5deg)' : 'skewY(5deg)'};
  transition: 0.3s;
`;
const StyedCard = styled.div.attrs((props: {position: string}) => props)`
  margin: 40px 0;
  position: relative;
  width: 300px;
  height: 400px;
  background: #fff;
  transition: 0.5s;
  &:hover {
    /* transform: translateY(-40px); */
  }
  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    background: #6A82FB;
    filter: brightness(90%); // make color darker
    transform-origin: bottom;
    transform: ${({ position }) => position === 'left' ? 'skewX(45deg)' : 'skewX(-45deg)'};

    transition: 0.5s;
  }
  &:after {
    content: '';
    position: absolute;
    top: ${({ position }) => position === 'left' ? '-15px' : '0'};
    left: ${({ position }) => position === 'left' ? '-15px' : 'unset'};
    right: ${({ position }) => position === 'left' ? 'unset' : '-15px'};
    width: 15px;
    height: 100%;
    background: #6A82FB;
    filter: brightness(80%); // make color darker
    border-bottom: 200px solid #fff;
    transform-origin: left;
     transform: ${({ position }) => position === 'left' ? 'skewY(45deg)' : 'skewY(-45deg)'};
    transition: 0.5s;
  }

  .imgbx {
    position: relative;
    width: 300px;
    height: 200px;
    background: #6A82FB;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .imgbx img {
    max-width: 100px;
  }
  .imgbx svg {
    max-width: 100px;
    max-height: 100px;
  }
  a svg {
    width: 15px;
    height: 15px;
  }
  .imgbx h3 {
    position: relative;
    color: white;
    margin-top: 20px;
  }
  .content {
    position: relative;
    width: 100%;
    height: 200px;
    padding: 20px;
    background: #fff;
    text-align: center;
    p {
      color: #999;
    }
  }
  .content:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 400px;
    background: linear-gradient(transparent,transparent,rgba(160,160,160,.2));
    transform-origin: bottom;
    transform: ${({ position }) => position === 'left' ? 'skewX(45deg)' : 'skewX(-45deg)'};
    transition: 0.5s;
    pointer-events: none;
    z-index: -1;
    filter: blur(2px);
    opacity: 0.8;
  }
  &:hover .content:before{
    /* transform: ${({ position }) => position === 'left' ? 'translateY(40px) skewX(45deg)' : 'translateY(40px) skewX(-45deg)'}; */
    filter: blur(5px);
    /* opacity: 0.5;  */
  }
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
      <CvSection>
        <HeadingComponent tagName='h2' color="#6A82FB">
          Moje CV
        </HeadingComponent>
        <h1>Sekcja do pobrania cv / lub to na oddzielną stronę wrzucić</h1>
        <h2>Jeżeli spodobała się dla Ciebie moja praca i chcesz dowiedzieć się więcej pobierz moje CV.</h2>
        <a href="/cv.pdf" download>Pobierz moje CV</a>
      </CvSection>

      <Exp position="left">
        <StyedCard position="left">
          <div className="imgbx">
            <Pdf className="pdf"/>
            <h3><a href="./" download>Download Pdf <Download /></a></h3>
          </div>
          <div className="content">
            <p>Jeżeli spodobały Ci się moje projekty i moje doświadczenie jest tym czego szukasz, zapraszam do pobrania CV i kontaktu 😊</p>
          </div>
        </StyedCard>
      </Exp>
    </>
  )
}

export default Home
