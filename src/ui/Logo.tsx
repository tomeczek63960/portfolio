import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import styled from 'styled-components'


const StyledLogo = styled.a`
  color: white;
  font-size: 25px;
  line-height: 1;
  position: relative;
  z-index: 10;
  transition: 0.3s;
`;

function Logo(props: any, ref: any) {
  const { locale } = useRouter();
  return (
    <Link href="/" locale={ locale }><StyledLogo ref={ref}>TK</StyledLogo></Link>
  );
}

export default React.forwardRef(Logo);
