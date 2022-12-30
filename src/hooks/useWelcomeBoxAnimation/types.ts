import { RefObject } from "react";

export interface IMessage {
  id: number;
  type: string;
  image: string;
  message: string;
  toggler?: string;
}
export interface ReturnTypes {
  activeMessages: IMessage[];
  refWriteAnimationWelcomeBox: RefObject<HTMLDivElement>;
  refWriteAnimationWelcomeBoxImage: RefObject<HTMLDivElement>;
  refWriteAnimationElement: RefObject<HTMLDivElement>;
  refWelcomeBoxConversation: RefObject<HTMLDivElement>;
  refWelcomeBoxOptions: RefObject<HTMLDivElement>;
  writeMessage: Function;
}
