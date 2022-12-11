export interface HeadingProps {
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  color?: string;
  hoverColor?: string;
  selectionColor?: string;
}

export const headingDefaultProps: HeadingProps = {
  tagName: "h1",
  color: "white"
};