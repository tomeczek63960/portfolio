import { IStrapiImage, IStrapiLocalizations } from "src/types";

export interface IStrapiProjectCategory {
  Theme: string;
  Title: string;
  createdAt: string;
  id: string;
  locale: string;
  localizations: IStrapiLocalizations[];
  projects: string[];
  published_at: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface IStrapiProjectTechnology {
  Title: string;
  createdAt: string;
  id: string;
  locale: string;
  localizations: IStrapiLocalizations[];
  projects: string[];
  published_at: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface IStrapiProject {
  Description: string;
  GithubUrl: string;
  Image: IStrapiImage;
  ShortDescription: string;
  Slug: string;
  Title: string;
  WebsiteUrl: string;
  createdAt: string;
  id: string;
  locale: string;
  localizations: IStrapiLocalizations[];
  project_categories: IStrapiProjectCategory[];
  project_technologies: IStrapiProjectTechnology[];
  published_at: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface PropsProject {
  project: IStrapiProject;
  onClickFunction: Function;
}
