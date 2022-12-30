export interface IMessageTogglers {
  id: number;
  toggler: string;
}
export interface IMessage {
  id: number;
  type: string;
  image: string;
  message: string;
  toggler?: string;
}
