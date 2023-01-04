import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiHeading } from "src/ui/Heading/types";

export interface PropsForm {
  content: {
    Heading: IStrapiHeading;
    Paragraphs: IStrapiParagraphText[];
    id: string;
    __component: string;
    __v: number;
    _id: string;
  };
}
