import React, { FC, RefObject } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StyledLink, StyledDesktopNav } from "./style";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { FormattedMessage, useIntl } from "react-intl";
import SocialMedia from "src/ui/SocialMedia";

const ComponentHeader: FC = () => {
  const { locale, locales = [], asPath } = useRouter();
  const intl = useIntl();
  const [refLinks] = useScrollTrigger(0.9, "children") as [
    RefObject<HTMLDivElement>
  ];

  return (
    <StyledDesktopNav ref={refLinks}>
      <SocialMedia />
      <Link href={intl.messages["nav.home.link"].toString()} locale={locale}>
        <StyledLink
          className={
            asPath === intl.messages["nav.home.link"].toString() ? "active" : ""
          }
        >
          <FormattedMessage id="nav.home.text" />
        </StyledLink>
      </Link>
      <Link href={intl.messages["nav.contact.link"].toString()} locale={locale}>
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
      <Link
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
      </Link>
      {locales.map((localeItem: string) => (
        <Link href="/" locale={localeItem} key={localeItem}>
          <StyledLink isDisabled={localeItem === locale}>
            {localeItem}
          </StyledLink>
        </Link>
      ))}
    </StyledDesktopNav>
  );
};

export default ComponentHeader;
