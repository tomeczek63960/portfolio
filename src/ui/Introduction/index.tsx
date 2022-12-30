import React, { FC } from "react";
import { StyledIntroductionSection } from "./style";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import Chart from "src/ui/Introduction/Svg/Chart";

const ComponentIntroduction: FC = () => {
  return (
    <StyledIntroductionSection>
      <Heading tagName="h1" hoverColor="#6A82FB">
        Hi 👋
        <br />
        I’m Tomek 😊
        <br />
        Nice to see You
      </Heading>
      <Chart />
      <Paragraph>
        Jezeli jesteś gotowy wypłynąć na nieznane wody 🐟, zapraszam na okręt
        🚣🏻, Dziś będę twoim przewodnikiem
      </Paragraph>
      <Paragraph>
        Zapraszam do zapoznania się z moją pracą w która została stworzona z
        pasją 💜
      </Paragraph>
    </StyledIntroductionSection>
  );
};

export default ComponentIntroduction;
