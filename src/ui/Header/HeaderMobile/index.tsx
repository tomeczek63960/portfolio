import React, { useMemo, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "src/ui/Logo";
import SocialMedia from "src/ui/SocialMedia";
import {
  StyledLink,
  StyledMobileNav,
  StyledMobileNavContainer,
  StyledBars,
  StyledHeaderBar,
} from "./style";
import { getPaths } from "src/helpers/getPaths";
import { useHeaderMobileAnimation } from "src/hooks/useHeaderMobileAnimation";
import { preventScroll } from "src/helpers/preventScroll";
import { isTruthy } from "src/helpers/checkFalsyType";

const Header: FC = () => {
  const { pathname, locale = "en", locales = [] } = useRouter();
  const [shortLocale] = isTruthy(locale) ? locale.split("-") : ["en"];
  const [
    tl,
    firstDot,
    lastDot,
    mobileNav,
    headerBar,
    bars,
    mobileNavContainer,
    socialMediaRef,
  ] = useHeaderMobileAnimation(locale, pathname);

  const handleBars = (): void => {
    const shouldPlay = tl.reversed() || tl.time() === 0;
    shouldPlay ? tl.play() : tl.reverse();
    preventScroll(shouldPlay);
  };

  const localePaths = useMemo(() => getPaths(shortLocale), [locale]);
  return (
    <>
      <StyledHeaderBar ref={headerBar}>
        <Logo />
        <StyledBars ref={bars} onClick={handleBars}>
          <span ref={firstDot}></span>
          <span></span>
          <span ref={lastDot}></span>
        </StyledBars>
      </StyledHeaderBar>

      <StyledMobileNav ref={mobileNav}>
        <StyledMobileNavContainer ref={mobileNavContainer}>
          <SocialMedia theme="white" ref={socialMediaRef} />
          <Link href={localePaths.home} locale={locale}>
            <StyledLink>Home</StyledLink>
          </Link>
          <Link href={localePaths.contact} locale={locale}>
            <StyledLink>Kontakt</StyledLink>
          </Link>
          <Link href={localePaths.caseStudies} locale={locale}>
            <StyledLink>Case studies</StyledLink>
          </Link>
          <Link href={localePaths.showCase} locale={locale}>
            <StyledLink>Show case</StyledLink>
          </Link>
          {locales.map((localeItem: any) => (
            <Link key={localeItem} href="/" locale={localeItem}>
              <StyledLink isDisabled={localeItem === locale}>
                {locale}
              </StyledLink>
            </Link>
          ))}
        </StyledMobileNavContainer>
      </StyledMobileNav>
    </>
  );
};

export default Header;
