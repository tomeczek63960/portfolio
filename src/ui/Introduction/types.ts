import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiProject } from "src/ui/Projects/Project/types";

export interface IStrapiIntroductionSection {
  Heading: IStrapiHeading;
  Paragraphs: IStrapiParagraphText[];
  Svg: "None" | "Chart" | "Performence";
  id: string;
  __component: "selection.introduction";
  __v: number;
  _id: string;
}

export interface PropsIntroduction {
  content: IStrapiIntroductionSection;
  projects?: IStrapiProject[];
}
