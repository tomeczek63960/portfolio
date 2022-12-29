import React, { FC } from "react";
import HeadingComponent from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import { StyledCvSection } from "./style";
import CvBoxComponent from "./CvBox";

const CvComponent: FC = () => {
  return (
    <StyledCvSection>
      <HeadingComponent tagName="h2" color="#6A82FB">
        Moje CV
      </HeadingComponent>
      <Paragraph>
        Doświadczenie zawodowe, moje aktualne umiejętności, opis komercyjnych
        projektów w których miałem okazję uczestniczyć oraz opis prywatnych
        projektów wraz z linkami do live demo i kodu źródłowego, to wszystko
        zawarte jest w moim cv.
      </Paragraph>
      <CvBoxComponent />
    </StyledCvSection>
  );
};

export default CvComponent;
