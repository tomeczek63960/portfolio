import React from "react";
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

    // TODO: add page where all of my projects will be presentent
    // TODO: absolute import for svg icons instead of relative imports
    <>
      <IntroductionComponent />
      <WelcomeBox />
      <Skills />
      <WorkExperience />
      <StyledCvSection />
    </>
  );
};

export default Home;
