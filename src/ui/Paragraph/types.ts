export interface IStrapiParagraphText {
  Text: string;
  __v: number;
  id: string;
  _id: string;
}

export interface PropsParagraph {
  children?: React.ReactNode;
  color?: string;
}

export const propsParagraphDefault: PropsParagraph = {
  color: "#cacaca",
};
