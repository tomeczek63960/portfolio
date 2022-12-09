import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import {StyledLogo} from './style';

interface Props {}
const Logo = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { locale } = useRouter();
  return (
    <Link href="/" locale={ locale }><StyledLogo ref={ref}>TK</StyledLogo></Link>
  );
})

export default Logo;
