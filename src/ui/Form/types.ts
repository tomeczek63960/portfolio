import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiProject } from "src/ui/Projects/Project/types";

export interface IStrapiFormSection {
  Heading: IStrapiHeading;
  Paragraphs: IStrapiParagraphText[];
  id: string;
  // __component: string;
  __component: "selection.contact-form";
  __v: number;
  _id: string;
}
export interface PropsForm {
  content: IStrapiFormSection;
  projects?: IStrapiProject[];
}
