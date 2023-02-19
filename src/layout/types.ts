import { ReactNode } from "react";

export interface PropsLayout {
  children: ReactNode;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
  disableFooterAnimation?: boolean;
}
