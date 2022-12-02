import React from 'react';
import { responsive, colors } from 'src/styled/mixins';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 32px;
  line-height: 1.4;
`; 
const H2 = styled.h2.attrs((props: {color?: string}) => props)`
  font-size: 25px;
  line-height: 1.3;
  color: ${props => props.color || 'white'};
`; 
const H3 = styled.h3``; 
const H4 = styled.h4``; 
const H5 = styled.h5``; 
const H6 = styled.h6``; 


const HeadingComponent = (
  {tagName, children, ...rest} :
  {tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6", children?: React.ReactNode, color?: string}
) => {
  // { as: Tag = 'div', ...otherProps }
  const mapStyle = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6
  }
  const Heading = mapStyle[tagName]
  return (
    <>
      <Heading {...rest}>{children}</Heading>
    </>
  );
}

export default HeadingComponent;
