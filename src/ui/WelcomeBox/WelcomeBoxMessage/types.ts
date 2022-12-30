export interface IWelcomeBoxMessage {
  type: string;
  toggler?: string;
  message: string;
  image: string;
}
export interface PropsWelcomeBoxMessage {
  message: IWelcomeBoxMessage;
}
