import React, { ReactElement } from "react";
import { StyledBase } from "./base";
import { StyledReset } from "./reset";

export const Style = (): ReactElement => {
  return (
    <>
      <StyledReset />
      <StyledBase />
    </>
  );
};

export default Style;
