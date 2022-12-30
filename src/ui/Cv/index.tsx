import React, { FC } from "react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import { StyledCvSection } from "./style";
import CvBox from "./CvBox";

const ComponentCv: FC = () => {
  return (
    <StyledCvSection>
      <Heading tagName="h2" color="#6A82FB">
        Moje CV
      </Heading>
      <Paragraph>
        Doświadczenie zawodowe, moje aktualne umiejętności, opis komercyjnych
        projektów w których miałem okazję uczestniczyć oraz opis prywatnych
        projektów wraz z linkami do live demo i kodu źródłowego, to wszystko
        zawarte jest w moim cv.
      </Paragraph>
      <CvBox />
    </StyledCvSection>
  );
};

export default ComponentCv;
