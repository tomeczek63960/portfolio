import React, { useRef, useState } from 'react';
import Projects from 'src/ui/Projects/Projects';
import HeadingComponent from 'src/ui/Heading';
import { variables } from 'src/styled/mixins';
import styled from 'styled-components';
import Paragraph from 'src/ui/Paragraph';

const StyledCaseStudiesSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;

const CaseStudies: React.FC = () => {
  return (
    <StyledCaseStudiesSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Portfolio projects    
      </HeadingComponent>
      <Paragraph>Zapraszam do zapoznania się z moimi projektami.</Paragraph>
      <Paragraph> 
        Warto zauważyć że są to projekty tylko i wyłącznie prywatne czyli tylko kropla w morzu tego co tak na prawdę miałem okazję tworzyć.
      </Paragraph>
      <Paragraph>
        Projety są podzielone na "Legacy" i "New" code zależnie od tego kiedy ten projekt był tworzony, najnowsze projekty oznaczone labelem 2022 / 2023 prezentują moją aktualną wiedzę.
      </Paragraph>
      <Projects />
    </StyledCaseStudiesSection>
  );
}

export default CaseStudies;
