export interface IStrapiHeadingText {
  Text: string;
  __v: number;
  id: string;
  _id: string;
}
export interface IStrapiHeading {
  HeadingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  Color: "white" | "blue" | "purple" | "error";
  HoverColor: "white" | "blue" | "purple" | "error";
  SelectionColor: "white" | "blue" | "purple" | "error";
  id: string;
  Text: IStrapiHeadingText[];
  Exceptions: string;
}
export interface PropsHeading {
  heading: IStrapiHeading;
}
