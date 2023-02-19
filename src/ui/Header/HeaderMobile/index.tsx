import React, { FC } from "react";
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
import { useHeaderMobileAnimation } from "src/hooks/useHeaderMobileAnimation";
import { preventScroll } from "src/helpers/preventScroll";
import { isFalsy } from "src/helpers/checkFalsyType";
import { FormattedMessage, useIntl } from "react-intl";

const ComponentHeaderMobile: FC = () => {
  const { locale, locales = [], asPath } = useRouter();
  const intl = useIntl();
  const [
    refTimeline,
    refFirstDot,
    refLastDot,
    refMobileNav,
    refHeaderBar,
    refBars,
    refMobileNavContainer,
    refSocialMedia,
  ] = useHeaderMobileAnimation();

  const handleBars = (): void => {
    if (isFalsy(refTimeline) || isFalsy(refTimeline.current)) return;
    const shouldPlay =
      refTimeline.current.reversed() || refTimeline.current.time() === 0;
    shouldPlay ? refTimeline.current.play() : refTimeline.current.reverse();
    preventScroll(shouldPlay);
  };

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
          <Link
            prefetch={false}
            href={intl.messages["nav.home.link"].toString()}
            locale={locale}
          >
            <StyledLink
              className={
                asPath === intl.messages["nav.home.link"].toString()
                  ? "active"
                  : ""
              }
            >
              <FormattedMessage id="nav.home.text" />
            </StyledLink>
          </Link>
          <Link
            prefetch={false}
            href={intl.messages["nav.contact.link"].toString()}
            locale={locale}
          >
            <StyledLink
              className={
                asPath === intl.messages["nav.contact.link"].toString()
                  ? "active"
                  : ""
              }
            >
              <FormattedMessage id="nav.contact.text" />
            </StyledLink>
          </Link>
          <Link
            prefetch={false}
            href={intl.messages["nav.case-studies.link"].toString()}
            locale={locale}
          >
            <StyledLink
              className={
                asPath === intl.messages["nav.case-studies.link"].toString()
                  ? "active"
                  : ""
              }
            >
              <FormattedMessage id="nav.case-studies.text" />
            </StyledLink>
          </Link>
          <Link
            prefetch={false}
            href={intl.messages["nav.experience.link"].toString()}
            locale={locale}
          >
            <StyledLink
              className={
                asPath === intl.messages["nav.experience.link"].toString()
                  ? "active"
                  : ""
              }
            >
              <FormattedMessage id="nav.experience.text" />
            </StyledLink>
          </Link>
          {/* TODO: prepare showcase page & uncomment link */}
          {/* <Link
            prefetch={false}
            href={intl.messages["nav.show-case.link"].toString()}
            locale={locale}
          >
            <StyledLink
              className={
                asPath === intl.messages["nav.show-case.link"].toString()
                  ? "active"
                  : ""
              }
            >
              <FormattedMessage id="nav.show-case.text" />
            </StyledLink>
          </Link> */}
          {locales.map((localeItem: string) => (
            <Link
              prefetch={false}
              key={localeItem}
              href="/"
              locale={localeItem}
            >
              <StyledLink isDisabled={localeItem === locale}>
                {localeItem}
              </StyledLink>
            </Link>
          ))}
        </StyledMobileNavContainer>
      </StyledMobileNav>
    </>
  );
};

export default ComponentHeaderMobile;
