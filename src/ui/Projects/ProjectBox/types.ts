import { IStrapiProject } from "../Project/types";

export interface PropsProjectBox {
  activeProject?: IStrapiProject;
  onCloseFunction: Function;
  isActiveProjectBox: boolean;
}
