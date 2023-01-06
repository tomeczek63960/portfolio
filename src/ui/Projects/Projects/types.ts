import { IStrapiProject } from "../Project/types";

export interface IStrapiProjectsSection {
  title: string;
  id: string;
  __component: "selection.projects";
  __v: number;
  _id: string;
}
export interface PropsProjects {
  content: IStrapiProjectsSection;
  projects?: IStrapiProject[];
}
