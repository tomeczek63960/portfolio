import React, { FC } from "react";
import Skills from "src/ui/Skills";
import WorkExperience from "src/ui/WorkExperience";
import WelcomeBox from "src/ui/WelcomeBox";
import StyledCvSection from "src/ui/Cv";
import IntroductionComponent from "src/ui/Introduction";

const ViewHome: FC = () => {
  return (
    // TODO:
    // Dodać do kazdego komponentu testy
    // dodać na resize refresh komponentów / timeline / gsapa
    // TODO: add page where all of my projects will be presentent
    // TODO: absolute import for svg icons instead of relative imports
    // TODO: change px to rem unit
    // TODO: fix gsap.target not found after change page
    // TODO: in folders with files use relative imports for (./types, ./style) for rest use absolute imports
    // TODO: add tests
    // TODO: move everything to strapi

    // TODO: scrollbar ma być taki jak na macu (globalnie ostylowany)

    // TODO: in all timeline .then .catch blocks add global error handling, np. popup with info something went wrong, try to refresh the page
    // related with strapi be
    // TODO: in skills add next carousel & add prismic.io, hygraph, builder.io ...
    // Add seo values for pages in strapi

    // TODO:
    // create consistent names
    <>
      <IntroductionComponent />
      <WelcomeBox />
      <Skills />
      <WorkExperience />
      <StyledCvSection />
    </>
  );
};

export default ViewHome;
