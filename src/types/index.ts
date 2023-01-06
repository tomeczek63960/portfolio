import { IStrapiIntroductionSection } from "src/ui/Introduction/types";
import { IStrapiWelcomeboxSection } from "src/ui/WelcomeBox/types";
import { IStrapiWorkExperienceSection } from "src/ui/WorkExperience/types";
import { IStrapiSkillsSection } from "src/ui/Skills/types";
import { IStrapiCvSection } from "src/ui/Cv/types";
import { IStrapiFormSection } from "src/ui/Form/types";
import { IStrapiExperienceListSection } from "src/ui/ExperienceList/types";
import { IStrapiProject } from "src/ui/Projects/Project/types";
import { IStrapiProjectsSection } from "src/ui/Projects/Projects/types";

export interface IStrapiLocalizations {
  id: string;
  locale: string;
  published_at: string;
  _id: string;
}
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
export type TPageContent =
  | IStrapiIntroductionSection
  | IStrapiWelcomeboxSection
  | IStrapiSkillsSection
  | IStrapiWorkExperienceSection
  | IStrapiCvSection
  | IStrapiFormSection
  | IStrapiExperienceListSection
  | IStrapiProjectsSection;

export interface IStrapiPage {
  PageContent: TPageContent[];
  SeoDescription: string;
  SeoTitle: string;
  Slug: string;
  createdAt: string;
  id: string;
  locale: string;
  localizations: IStrapiLocalizations[];
  published_at: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface IPage {
  page: IStrapiPage;
  projects?: IStrapiProject[];
}

export interface IPropsPage {
  props: IPage;
}
export interface IStaticPath {
  locale: string;
  params: { id: string };
}

export interface IGetStaticPathsReturn {
  paths: IStaticPath[];
  fallback: boolean;
}

export interface IDynamicContent {
  content: TPageContent;
  projects?: IStrapiProject[];
}
