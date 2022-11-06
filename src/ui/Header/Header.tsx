import React, { useMemo } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: black;
`
const DesktopNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
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
          caseStudy: "/case-studies/1",
          showCase: "/show"
        };
      case "en":
        return {
          home: "/",
          contact: "/contact",
          caseStudies: "/case-studies",
          caseStudy: "/case-studies/1",
          showCase: "/show-case"
        };
      default:
        return {
          home: "/",
          contact: "/contact",
          caseStudies: "/case-studies",
          caseStudy: "/case-study/1",
          showCase: "/show-case"
        };
    }
  }, [locale]);
  return (
    <>
      <DesktopNav>
        <StyledLink href={ localePaths.home } locale={ locale }>Home</StyledLink>
        <br/>
        <StyledLink href={ localePaths.contact } locale={ locale }>Kontakt</StyledLink>
        <br/>
        <StyledLink href={ localePaths.caseStudies } locale={ locale }>Case studies</StyledLink>
        <br/>
        <StyledLink href={ localePaths.caseStudy } locale={ locale }>Case study</StyledLink>
        <br/>
        <StyledLink href={ localePaths.showCase } locale={ locale }>Show case</StyledLink>
        <br/>
        {[...locales].sort().map((locale) => (
              <StyledLink key={locale} href="/" locale={ locale }>
                { locale }
              </StyledLink>
            ))}
      </DesktopNav>
    </>
  );
}

export default Header;
