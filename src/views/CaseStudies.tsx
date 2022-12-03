import React, { useRef, useState } from 'react';
import Projects from 'src/ui/Projects/Projects';
import HeadingComponent from 'src/ui/Heading/Heading';

function CaseStudies() {
  return (
    <>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Portfolio projects    
      </HeadingComponent>
      <Projects />
    </>
  );
}

export default CaseStudies;
