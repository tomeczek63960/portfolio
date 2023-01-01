import React, { useMemo, FC, RefObject } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Github, Linkedin } from "src/Svg";
import {
  StyledLink,
  StyledDesktopNav,
  StyledDesktopNavSocialMeida,
} from "./style";
import { getPaths } from "src/helpers/getPaths";
import { isTruthy } from "src/helpers/checkFalsyType";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";

const ComponentHeader: FC = () => {
  const { locale, locales = [] } = useRouter();
  const [shortLocale] = isTruthy(locale) ? locale.split("-") : ["en"];
  const localePaths = useMemo(() => getPaths(shortLocale), [locale]);

  const [refLinks] = useScrollTrigger(0.9, "children") as [
    RefObject<HTMLDivElement>
  ];
  return (
    <StyledDesktopNav ref={refLinks}>
      <StyledDesktopNavSocialMeida>
        <a
          href="https://github.com/tomeczek63960"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/tomeczek63960"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </StyledDesktopNavSocialMeida>
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
      <Link href={localePaths.experience} locale={locale}>
        <StyledLink>Experience</StyledLink>
      </Link>
      {locales.map((localeItem: string) => (
        <Link key={localeItem} href="/" locale={localeItem}>
          <StyledLink isDisabled={localeItem === locale}>{locale}</StyledLink>
        </Link>
      ))}
    </StyledDesktopNav>
  );
};

export default ComponentHeader;
