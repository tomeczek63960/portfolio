import React, { FC } from "react";
import Skills from "src/ui/Skills";
import WorkExperience from "src/ui/WorkExperience";
import WelcomeBox from "src/ui/WelcomeBox";
import StyledCvSection from "src/ui/Cv";
import IntroductionComponent from "src/ui/Introduction";

const Home: FC = () => {
  return (
    // TODO:
    // Dodać do kazdego komponentu testy
    // dodać na resize refresh komponentów / timeline / gsapa
    // TODO: add .clear() .kill() to all timelines
    // TODO: add page where all of my projects will be presentent
    // TODO: absolute import for svg icons instead of relative imports
    // TODO: change px to rem unit
    // TODO: fix gsap.target not found after change page
    // TODO: in folders with files use relative imports for (./types, ./style) for rest use absolute imports
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
