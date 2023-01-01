interface IPaths {
  home: string;
  contact: string;
  caseStudies: string;
  showCase: string;
  experience: string;
}
export const getPaths = (locale: string): IPaths => {
  switch (locale) {
    case "pl":
      return {
        home: "/",
        contact: "/kontakt",
        caseStudies: "/case-studies",
        showCase: "/show",
        experience: "pl/doswiadczenie",
      };
    case "en":
      return {
        home: "/",
        contact: "/contact",
        caseStudies: "/case-studies",
        showCase: "/show-case",
        experience: "/experience",
      };
    default:
      return {
        home: "/",
        contact: "/contact",
        caseStudies: "/case-studies",
        showCase: "/show-case",
        experience: "/experience",
      };
  }
};
