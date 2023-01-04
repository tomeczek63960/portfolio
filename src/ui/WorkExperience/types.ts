import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiWorkExperienceItem } from "./WorkExperienceListItem/types";
export interface PropsWorkExperience {
  content: {
    HeadText: string;
    HeadTitle: string;
    Heading: IStrapiHeading;
    Paragraphs: IStrapiParagraphText[];
    WorkExperienceItem: IStrapiWorkExperienceItem[];
    BtnText: string;
    BtnLinkTo: "Introduction" | "WelcomeBox" | "Skills" | "Cv";
    id: string;
    __component: string;
    __v: number;
    _id: string;
  };
}
