import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";

export interface IStrapiImage {
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
export interface IStrapiSkill {
  Icon:
    | "Angular"
    | "Adobexd"
    | "Contentful"
    | "Css"
    | "Figma"
    | "Gatsby"
    | "Gsap"
    | "Html"
    | "Javascript"
    | "NextJs"
    | "Nuxt"
    | "ReactJs"
    | "Redux"
    | "Sass"
    | "Strapi"
    | "Typescript"
    | "Vue"
    | "StyledComponents"
    | "Php"
    | "Pimcore"
    | "Shopware";
  Text: string;
  Title: string;
  id: string;
  __v: number;
  _id: string;
  Image?: IStrapiImage;
}
export interface IStrapiSkillCarousel {
  Heading: IStrapiHeading;
  Skill: IStrapiSkill[];
  id: string;
  __v: number;
  _id: string;
}
export interface PropsSkillsComponent {
  content: {
    Heading: IStrapiHeading;
    Paragraphs: IStrapiParagraphText[];
    SkillsCarousel: IStrapiSkillCarousel[];
    id: string;
    __component: string;
    __v: number;
    _id: string;
  };
}
