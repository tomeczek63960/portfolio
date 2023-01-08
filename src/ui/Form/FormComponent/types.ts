import { FormEvent } from "react";
import { TFormInputTextarea } from "./Input/types";

export interface IFormMessage {
  type: "success" | "error" | "pending";
  message: string;
}
export type FormEventHandler = FormEvent<TFormInputTextarea>;
