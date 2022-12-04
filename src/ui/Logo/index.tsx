import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import {StyledLogo} from './style';

const Logo = (props: any, ref: any) => {
  const { locale } = useRouter();
  return (
    <Link href="/" locale={ locale }><StyledLogo ref={ref}>TK</StyledLogo></Link>
  );
}

export default React.forwardRef(Logo);
