import { IStrapiHeading } from "src/ui/Heading/types";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { IStrapiImage } from "src/types";
import { IStrapiProject } from "src/ui/Projects/Project/types";

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
export interface IStrapiSkillsSection {
  Heading: IStrapiHeading;
  Paragraphs: IStrapiParagraphText[];
  SkillsCarousel: IStrapiSkillCarousel[];
  id: string;
  // __component: string;
  __component: "selection.skills";
  __v: number;
  _id: string;
}
export interface PropsSkillsComponent {
  content: IStrapiSkillsSection;
  projects?: IStrapiProject[];
}
