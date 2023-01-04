import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiLocalizations } from "src/ui/Projects/Project/types";

export interface IStrapiWelcomeboxMessage {
  id: string;
  Type: "admin" | "user";
  Image: IStrapiWelcomeboxMessageImage;
  Message: string;
  Toggler?: string;
  createdAt: string;
  locale: string;
  localizations: IStrapiLocalizations[];
  published_at: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface IStrapiWelcomeboxMessageImage {
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
  formats: object;
}
export interface IStrapiWelcomeboxToggler {
  Name: string;
  Toggler: string;
  id: string;
  __v: number;
  _id: string;
}
export interface PropsWelcomeBox {
  content: {
    id: string;
    _id: string;
    __v: number;
    __component: string;
    BottomText: string;
    HeadName: string;
    HeadPosition: string;
    Heading: IStrapiHeading;
    Image: IStrapiWelcomeboxMessageImage;
    Paragraph: IStrapiParagraphText[];
    WelcomeBoxMessageToggler: IStrapiWelcomeboxToggler[];
    active_messages: IStrapiWelcomeboxMessage[];
    new_messages: IStrapiWelcomeboxMessage[];
  };
}
