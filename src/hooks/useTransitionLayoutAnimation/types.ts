import { RefObject, ReactNode } from "react";

export interface ITransitionLayoutReturn {
  displayChildren: ReactNode;
  refContent: RefObject<HTMLDivElement>;
  refLeftTransition: RefObject<HTMLDivElement>;
  refRightTransition: RefObject<HTMLDivElement>;
  refCenterCircle: RefObject<HTMLDivElement>;
  refLeftCircle: RefObject<HTMLSpanElement>;
  refRightCircle: RefObject<HTMLSpanElement>;
  refTransitionLeftText: RefObject<HTMLDivElement>;
  refTransitionRightText: RefObject<HTMLDivElement>;
}
