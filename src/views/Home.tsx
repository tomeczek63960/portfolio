import React, { FC } from "react";
// import Skills from "src/ui/Skills";
// import WorkExperience from "src/ui/WorkExperience";
// import WelcomeBox from "src/ui/WelcomeBox";
import StyledCvSection from "src/ui/Cv";
// import IntroductionComponent from "src/ui/Introduction";

const ViewHome: FC = () => {
  return (
    // TODO:
    // dodać na resize refresh komponentów / timeline / gsapa

    // related with strapi be
    // TODO: move everything to strapi
    // TODO: in skills add next carousel & add prismic.io, hygraph, builder.io ...
    // Add seo values for pages in strapi

    // TODO: scrollbar ma być taki jak na macu (globalnie ostylowany)
    // TODO: add tests to all components
    <>
      {/* <IntroductionComponent /> */}
      {/* <WelcomeBox /> */}
      {/* <Skills /> */}
      {/* <WorkExperience /> */}
      <StyledCvSection />
    </>
  );
};

export default ViewHome;
