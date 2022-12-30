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

    // TODO: in all timeline .then .catch blocks add global error handling, np. popup with info something went wrong, try to refresh the page
    // TODO: add removeEventListener everywhere is used addEventListener
    // TODO: in skills add next carousel & add prismic.io, hygraph, ...
    // Add seo values for pages in strapi

    // TODO:
    // create consistent names

    // - styled components - Styled...
    // - styled components section - Styled...Section
    // - styled components section - Styled...Section
    // - components - Component...
    // - refs - ref...
    // - types Iterface - I...
    // - types Type - T...
    // - types Props - Props...
    //
    // hooks insert into separate folders with types and index
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
