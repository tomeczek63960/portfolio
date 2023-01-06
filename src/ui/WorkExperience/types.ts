import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiWorkExperienceItem } from "./WorkExperienceListItem/types";
import { IStrapiProject } from "src/ui/Projects/Project/types";

export interface IStrapiWorkExperienceSection {
  HeadText: string;
  HeadTitle: string;
  Heading: IStrapiHeading;
  Paragraphs: IStrapiParagraphText[];
  WorkExperienceItem: IStrapiWorkExperienceItem[];
  BtnText: string;
  BtnLinkTo: "Introduction" | "WelcomeBox" | "Skills" | "Cv";
  id: string;
  // __component: string;
  __component: "selection.work-experience";
  __v: number;
  _id: string;
}
export interface PropsWorkExperience {
  content: IStrapiWorkExperienceSection;
  projects?: IStrapiProject[];
}
