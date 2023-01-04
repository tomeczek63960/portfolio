export interface IStrapiHeadingText {
  Text: string;
  __v: number;
  id: string;
  _id: string;
}
export interface IStrapiHeading {
  HeadingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  Color: "white" | "blue" | "purple";
  HoverColor: "white" | "blue" | "purple";
  SelectionColor: "white" | "blue" | "purple";
  id: string;
  Text: IStrapiHeadingText[];
}
export interface PropsHeading {
  heading: IStrapiHeading;
}
