import React, { useMemo } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import styled from 'styled-components'
import Linkedin from '../../../public/svg/linkedin.svg';
import Github from '../../../public/svg/github.svg';
import { responsive, colors } from 'src/styled/mixins';

const StyledLink = styled.a.attrs((props: {isDisabled: Boolean}) => props)`
  margin: 5px 0;
  color: ${colors.black};
  font-family: 'Noto Serif Oriya', serif;
  font-size: 22px;
  line-height: 30px;
  display: ${ props => props.isDisabled ? 'none' : 'block' };
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    color: ${colors.purpleSecondary};
  }
  ${responsive.tabletL`
    font-size: 24px;
    line-height: 33px;
  `}
  ${responsive.desktop`
    margin: 10px 0;
    font-size: 26px;
    line-height: 36px;
  `}
  ${responsive.desktopHd`
    font-size: 36px;
    line-height: 48px;
  `}
`;
const DesktopNav = styled.div`
  height: 100%;
  display: none;
  ${responsive.tabletP`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
const DesktopNavSocialMeida = styled.div`
  margin-bottom: 20px;
  display: flex;
  a {
    display: block;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: 30px;
      height: 30px;
      path {
        transition: 0.3s;
      }
    }
    &:hover svg path {
      fill: ${colors.purpleSecondary};
    }
  }
`;

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
