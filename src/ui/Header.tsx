import React, { useEffect, useMemo, useRef } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import styled from 'styled-components'
import { gsap } from "gsap";

const StyledLink = styled(Link)`
  color: black;
`
const MobileNav = styled.div`
  background: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 0;
  overflow: hidden;
`
const DesktopNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

const StyledBars = styled.button`
  /* box-shadow: 0 0 20px #7928ca; */
  margin: 20px 20px 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 2;
  display: block;
  border-radius: 10px;
  span {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: white;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span:first-child {
    transform-origin: center center;
    left: calc(50% - 12px);
  }
  span:last-child {
    transform-origin: center center;
    left: calc(50% + 12px);
  }
`

function Header() {
  const { pathname, locale, locales=[] } = useRouter();
  const [ shortLocale ] = locale ? locale.split("-") : ["en"];
  const firstDot = useRef<any>()
  const lastDot = useRef<any>()
  const isRotated = useRef<any>(true)
  const tl = useRef<any>()
  const mobileNav = useRef<any>()
  
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
    tl.current.to(firstDot.current, {
      duration: 0.3,
      rotate: '-45deg',
      left: '50%'
    }, 'join-dots');
    tl.current.to(lastDot.current, {
      duration: 0.3,
      rotate: '45deg',
      left: '50%'
    }, 'join-dots');
    tl.current.to(firstDot.current, {
      duration: 0.5,
      height: '30px',
      background: 'black'
    }, 'rotate-dots');
    tl.current.to(lastDot.current, {
      duration: 0.5,
      height: '30px',
      background: 'black'
    }, 'rotate-dots');
    tl.current.to(mobileNav.current, {
      duration: 0.5,
      height: '100vh'
    }, 'rotate-dots')
    // dodać elementy nawigacji wczytujące się poprzez animację opacity i wjazd od lewej strony
  }, []);
  useEffect(() => {
    return () => {
      if (isRotated.current) {
        setTimeout(() => {
          tl.current.pause()
          tl.current.seek(0);
        }, 1000)
      }
    };
  }, [pathname])

  const handleBars = () => {
    isRotated.current = !isRotated.current
    if (isRotated.current) {
      tl.current.play()  
    } else {
      tl.current.reverse();
    }
  }

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
      <StyledBars onClick={handleBars}>
        <span ref={ firstDot }></span>
        <span></span>
        <span ref={ lastDot }></span>
      </StyledBars>
      <MobileNav ref={ mobileNav }>
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
      </MobileNav>
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
