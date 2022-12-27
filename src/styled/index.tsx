import React from "react";
import { StyledBase } from "./base";
import { StyledReset } from "./reset";

export const Style = (): any => {
  return (
    <>
      <StyledReset />
      <StyledBase
        tabletP="768px"
        tabletL="1024px"
        desktop="1366px"
        desktopHd="1920px"
        fontFamilyPrimary="Arial"
        fontWeightNormal="normal"
        fontWeightMedium={500}
        fontWeightBold="bold"
        tabletTextWidth="45.2rem"
        deskTextWidth="48.9rem"
        deskLTextWidth="71rem"
        gridSpacerMobile="2.5rem"
        gridSpacerTabletP="3rem"
        gridSpacerTabletL="3rem"
        gridSpacerDesk="5rem"
        transitionBase="0.3s ease-in-out"
        white="#fff"
        black="#000"
        pink="#f81ce5"
        violet="#7928ca"
      />
    </>
  );
};

export default Style;
