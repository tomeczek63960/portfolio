import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";

export interface IStrapiContent {
  content: {
    Heading: IStrapiHeading;
    Paragraphs: IStrapiParagraphText[];
    Svg: "None" | "Chart" | "Performence";
    id: string;
    __component: string;
    __v: number;
    _id: string;
  };
}
