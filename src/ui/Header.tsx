import React, { useMemo } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
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
      <Link href={ localePaths.home } locale={ locale }>Home</Link>
      <br/>
      <Link href={ localePaths.contact } locale={ locale }>Kontakt</Link>
      <br/>
      <Link href={ localePaths.caseStudies } locale={ locale }>Case studies</Link>
      <br/>
      <Link href={ localePaths.caseStudy } locale={ locale }>Case study</Link>
      <br/>
      <Link href={ localePaths.showCase } locale={ locale }>Show case</Link>
      <br/>

      {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={ locale }>
              { locale }
            </Link>
          ))}
    </>
  );
}

export default Header;
