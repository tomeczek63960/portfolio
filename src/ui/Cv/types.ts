import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiProject } from "src/ui/Projects/Project/types";

interface IStrapiCv {
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  hash: string;
  height: number;
  id: string;
  mime: string;
  name: string;
  provider: string;
  related: string[];
  size: number;
  updatedAt: string;
  url: string;
  width: number;
  __v: number;
  _id: string;
}

export interface IStrapiCvSection {
  Cv: IStrapiCv;
  Heading: IStrapiHeading;
  LinkText: string;
  ListItems: IStrapiParagraphText[];
  Paragraphs: IStrapiParagraphText[];
  id: string;
  // __component: string;
  __component: "selection.cv";
  __v: number;
  _id: string;
}
export interface PropsCvBox {
  content: IStrapiCvSection;
  projects?: IStrapiProject[];
}
