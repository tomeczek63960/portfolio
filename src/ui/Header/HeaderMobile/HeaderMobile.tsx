import React, { useMemo, useRef } from 'react';
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect"
import { useRouter } from "next/router";
import Link from 'next/link'
import { gsap } from "gsap";
import Logo from 'src/ui/Logo/Logo';
import SocialMedia from 'src/ui/SocialMedia/SocialMedia';
import {StyledLink, MobileNav, MobileNavContainer, StyledBars, HeaderBar} from './style';
import { colors } from 'src/styled/mixins';

const Header = () => {
  const { pathname, locale, locales=[] } = useRouter();
  const [ shortLocale ] = locale ? locale.split("-") : ["en"];
  const isNavOpen = useRef(false);
  const firstDot = useRef<any>()
  const middleDot = useRef<any>()
  const lastDot = useRef<any>()
  const tl = useRef<any>()
  const mobileNav = useRef<any>()
  const logoRef = useRef<any>()
  const headerBar = useRef<any>()
  const prevScrollPosition = useRef(0);
  const currentScrollPos = useRef(0);
  const bars = useRef<any>();
  const animateDots = useRef(true);
  const mobileNavContainer = useRef<any>();
  const socialMediaRef = useRef<any>();

  const handleScroll = () => {
    if (!bars.current) return;
    currentScrollPos.current = window?.pageYOffset
    const headerHeight = `-${ headerBar?.current?.offsetHeight }px`

    if (currentScrollPos.current === 0) {
      gsap.to(bars.current.children, {
        duration: 0.3,
        scale: 2,
        stagger: 0.1,
        delay: 0.3
      });
      gsap.to(bars.current.children, {
        duration: 0.3,
        scale: 1,
        stagger: 0.1,
        delay: 0.5
      });
      gsap.to(headerBar.current, {
        duration: 0.3,
        boxShadow: 'none'
      });
    } else {
      gsap.to(headerBar.current, {
        duration: 0.1,
        boxShadow: `0 0.7rem 2rem ${colors.darken}`
      });
    }

    if (currentScrollPos.current >= 80) {
      if (prevScrollPosition.current >= currentScrollPos.current) {
        gsap.to(headerBar.current, {
          duration: 0.3,
          y: 0,
        });
        if (animateDots.current) {
          gsap.to(bars.current.children, {
            duration: 0.3,
            scale: 2,
            stagger: 0.1,
            delay: 0.4
          });
          gsap.to(bars.current.children, {
            duration: 0.3,
            scale: 1,
            stagger: 0.1,
            delay: 0.6
          });
          animateDots.current = false;
        }
      } else {
        animateDots.current = true;
        gsap.to(headerBar.current, {
          duration: 0.3,
          y: headerHeight
        });
      }
    } else {
      gsap.to(headerBar.current, {
        duration: 0.3,
        y: 0
      });
    }

    prevScrollPosition.current = currentScrollPos.current
  }
  useIsomorphicLayoutEffect(() => {
    prevScrollPosition.current = window.pageYOffset
    tl.current = gsap.timeline({ paused: true })
    
    tl.current.to(bars.current.children, {
      duration: 0.3,
      scale: 2,
      stagger: 0.1,
    }, 'load-dot');
    tl.current.to(bars.current.children, {
      duration: 0.3,
      scale: 1,
      stagger: 0.1,
      delay: 0.2
    }, 'load-dot');
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
    }, 'rotate-dots');
    tl.current.to(lastDot.current, {
      duration: 0.5,
      height: '30px',
    }, 'rotate-dots');
    tl.current.to(mobileNav.current, {
      duration: 0.5,
      height: 'calc(100vh - 80px)',
      ease: "power2.out"
    }, 'rotate-dots')
    tl.current.to([...socialMediaRef.current.children, ...mobileNavContainer.current.children], {
      duration: 0.3,
      delay: 0.2,
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power2.out",
      stagger: 0.1
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, []);
  useIsomorphicLayoutEffect(() => {
    return () => {
      setTimeout(() => {
        tl.current.pause()
        tl.current.seek(0);
        gsap.set('html', {
          overflowY: 'scroll',
          height: 'auto'
        });
      }, 1000)
    };
  }, [locale, pathname])

  const handleBars = () => {
    if (!isNavOpen.current) {
      gsap.set('html', {
        overflow: 'hidden',
        height: '100vh'
      });
      tl.current.play();
      isNavOpen.current = true;
    } else {
      gsap.set('html', {
        overflowY: 'scroll',
        height: 'auto'
      });
      tl.current.reverse();
      isNavOpen.current = false;
    }
  }

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
      <HeaderBar ref={ headerBar }>
        <Logo ref={ logoRef }/>
        <StyledBars ref={ bars } onClick={handleBars}>
          <span ref={ firstDot }></span>
          <span ref={ middleDot }></span>
          <span ref={ lastDot }></span>
        </StyledBars>
      </HeaderBar>

      <MobileNav ref={ mobileNav }>
        <MobileNavContainer ref={ mobileNavContainer }>
          <SocialMedia theme='white' ref={socialMediaRef} />
          <Link href={ localePaths.home } locale={ locale }><StyledLink>Home</StyledLink></Link>
          <Link href={ localePaths.contact } locale={ locale }><StyledLink>Kontakt</StyledLink></Link>
          <Link href={ localePaths.caseStudies } locale={ locale }><StyledLink>Case studies</StyledLink></Link>
          <Link href={ localePaths.showCase } locale={ locale }><StyledLink>Show case</StyledLink></Link>
          {locales.map((localeItem: any) => (
              <Link key={localeItem} href="/" locale={ localeItem }>
                <StyledLink isDisabled={localeItem === locale}>{ locale }</StyledLink>
              </Link>
            )
          )}
        </MobileNavContainer>
      </MobileNav>
    </>
  );
}

export default Header;
