import { IStrapiProject } from "src/ui/Projects/Project/types";

export interface IStrapiExperienceListItem {
  Accomplishments: string;
  Description: string;
  Name: string;
  Role: string;
  Sector: string;
  Technologies: string;
  id: string;
  __v: number;
  _id: string;
}
export interface IStrapiExperienceListSection {
  ProjectsExperienceItem: IStrapiExperienceListItem[];
  id: string;
  __component: "selection.projects-experience";
  __v: number;
  _id: string;
}
export interface PropsExperienceList {
  content: IStrapiExperienceListSection;
  projects?: IStrapiProject[];
}
