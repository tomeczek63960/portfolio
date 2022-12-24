import Skills from 'src/ui/Skills';
import WorkExperience from 'src/ui/WorkExperience';
import WelcomeBox from 'src/ui/WelcomeBox';
import StyledCvSection from 'src/ui/Cv';
import IntroductionComponent from 'src/ui/Introduction';

const Home: React.FC = () => {
  return (
    // TODO: 
    // w głównej animacji Inicjały animować przez gsapa jako rysowane literki svg
    // wszystko rozdzielić na komponenty w folderach (plik tsx ze skryptami oraz oddzielny plik z deklaracjami styli dla komponentu | oddzielny plik na typy ts | i testy)
    // dodać na resize refresh komponentów / timeline / gsapa

    // globalne style dla linków (w tekstach) fioletowy lub niebieski kolor (font-wieght: 500) i underline
    // globalne style przenieść do styled components
    <>
      <IntroductionComponent />
      <WelcomeBox />
      <Skills />
      <WorkExperience />
      <StyledCvSection />
    </>
  )
}

export default Home
