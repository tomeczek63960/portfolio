import Skills from "src/ui/Skills";
import WorkExperience from "src/ui/WorkExperience";
import WelcomeBox from "src/ui/WelcomeBox";
import StyledCvSection from "src/ui/Cv";
import IntroductionComponent from "src/ui/Introduction";

const Home: React.FC = () => {
  return (
    // TODO: 
    // Dodać do kazdego komponentu testy
    // dodać na resize refresh komponentów / timeline / gsapa

    // globalne style dla linków (w tekstach) fioletowy lub niebieski kolor (font-wieght: 500) i underline
    // globalne style przenieść do styled components
    // zmienić zarządzanie statem na reduxa
    // Dodać linta zeby nie było trzeba ręcznie updatować
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
