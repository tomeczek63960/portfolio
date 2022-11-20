import React, { useMemo } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a.attrs((props: {isDisabled: Boolean}) => props)`
  margin: 5px 0;
  color: black;
  font-family: 'Noto Serif Oriya', serif;
  font-size: 22px;
  line-height: 30px;
  display: ${ props => props.isDisabled ? 'none' : 'block' };
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    color: #6428b4;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
    line-height: 33px;
  }
  @media screen and (min-width: 1366px) {
    margin: 10px 0;
    font-size: 26px;
    line-height: 36px;
  }
  @media screen and (min-width: 1920px) {
    margin: 10px 0;
    font-size: 36px;
    line-height: 48px;
  }
`
const DesktopNav = styled.div`
  padding-left: 40px;
  height: 100%;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 60px;
  }
  @media screen and (min-width: 1366px) {
    padding-left: 80px;
  }
`

function Header() {
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
