interface IPaths {
  home: string;
  contact: string;
  caseStudies: string;
  showCase: string;
}
export const getPaths = (locale: string): IPaths => {
  switch (locale) {
    case "pl":
      return {
        home: "/",
        contact: "/kontakt",
        caseStudies: "/case-studies",
        showCase: "/show",
      };
    case "en":
      return {
        home: "/",
        contact: "/contact",
        caseStudies: "/case-studies",
        showCase: "/show-case",
      };
    default:
      return {
        home: "/",
        contact: "/contact",
        caseStudies: "/case-studies",
        showCase: "/show-case",
      };
  }
};
