import React, { useMemo } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Linkedin from '../../../../public/svg/linkedin.svg';
import Github from '../../../../public/svg/github.svg';
import {StyledLink, DesktopNav, DesktopNavSocialMeida} from './style';

const Header = () => {
  const { locale, locales=[] } = useRouter();
  const [ shortLocale ] = locale ? locale.split("-") : ["en"];

  const localePaths = useMemo(() => {
    switch (shortLocale) {
      case "pl":
        return {
          home: "/",
          contact: "/kontakt",
          caseStudies: "/case-studies",
          showCase: "/show"
        };
      case "en":
        return {
          home: "/",
          contact: "/contact",
          caseStudies: "/case-studies",
          showCase: "/show-case"
        };
      default:
        return {
          home: "/",
          contact: "/contact",
          caseStudies: "/case-studies",
          showCase: "/show-case"
        };
    }
  }, [locale]);
  return (
    <>
      <DesktopNav>
        <DesktopNavSocialMeida>
          <a href="https://github.com/tomeczek63960" target="_blank"><Linkedin /></a>
          <a href="https://github.com/tomeczek63960" target="_blank"><Github /></a>
        </DesktopNavSocialMeida>
        <Link href={ localePaths.home } locale={ locale }>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href={ localePaths.contact } locale={ locale }>
          <StyledLink>Kontakt</StyledLink>
        </Link>
        <Link href={ localePaths.caseStudies } locale={ locale }>
          <StyledLink>Case studies</StyledLink>
        </Link>
        <Link href={ localePaths.showCase } locale={ locale }>
          <StyledLink>Show case</StyledLink>
        </Link>
        {locales.map((localeItem: any) => (
          <Link key={localeItem} href="/" locale={ localeItem }>
            <StyledLink isDisabled={localeItem === locale}>{ locale }</StyledLink>
          </Link>
        ))}
      </DesktopNav>
    </>
  );
}

export default Header;
