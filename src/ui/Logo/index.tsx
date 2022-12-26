import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StyledLogo } from "./style";
import { LogoProps } from "./types";

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>((props, ref) => {
  const { locale } = useRouter();
  return (
    <Link href="/" locale={locale}>
      <StyledLogo ref={ref}>TK</StyledLogo>
    </Link>
  );
});
Logo.displayName = "Logo";

export default Logo;
