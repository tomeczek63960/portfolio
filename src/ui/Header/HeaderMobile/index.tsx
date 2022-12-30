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
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";

const ComponentHeaderMobile: FC = () => {
  const { pathname, locale = "en", locales = [] } = useRouter();
  const [shortLocale] = isTruthy(locale) ? locale.split("-") : ["en"];
  const [
    refTimeline,
    refFirstDot,
    refLastDot,
    refMobileNav,
    refHeaderBar,
    refBars,
    refMobileNavContainer,
    refSocialMedia,
  ] = useHeaderMobileAnimation(locale, pathname);

  const handleBars = (): void => {
    if (isFalsy(refTimeline) || isFalsy(refTimeline.current)) return;
    const shouldPlay =
      refTimeline.current.reversed() || refTimeline.current.time() === 0;
    shouldPlay ? refTimeline.current.play() : refTimeline.current.reverse();
    preventScroll(shouldPlay);
  };

  const localePaths = useMemo(() => getPaths(shortLocale), [locale]);
  return (
    <>
      <StyledHeaderBar ref={refHeaderBar}>
        <Logo />
        <StyledBars ref={refBars} onClick={handleBars}>
          <span ref={refFirstDot}></span>
          <span></span>
          <span ref={refLastDot}></span>
        </StyledBars>
      </StyledHeaderBar>

      <StyledMobileNav ref={refMobileNav}>
        <StyledMobileNavContainer ref={refMobileNavContainer}>
          <SocialMedia theme="white" ref={refSocialMedia} />
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
          {locales.map((localeItem: string) => (
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

export default ComponentHeaderMobile;
