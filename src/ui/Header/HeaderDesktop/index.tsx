import React, { useMemo } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Linkedin from '../../../../public/svg/linkedin.svg';
import Github from '../../../../public/svg/github.svg';
import {StyledLink, StyledDesktopNav, StyledDesktopNavSocialMeida} from './style';
import {getPaths} from 'src/helpers/getPaths';

const Header: React.FC = () => {
  const { locale, locales=[] } = useRouter();
  const [ shortLocale ] = locale ? locale.split("-") : ["en"];

  const localePaths = useMemo(() => getPaths(shortLocale), [locale]);
  return (
    <>
      <StyledDesktopNav>
        <StyledDesktopNavSocialMeida>
          <a href="https://github.com/tomeczek63960" target="_blank"><Linkedin /></a>
          <a href="https://github.com/tomeczek63960" target="_blank"><Github /></a>
        </StyledDesktopNavSocialMeida>
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
      </StyledDesktopNav>
    </>
  );
}

export default Header;
