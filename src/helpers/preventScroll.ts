import { isTruthy } from "src/helpers/checkFalsyType";

export const preventScroll = (preventScroll?: boolean): void => {
  const html = document.querySelector("html");
  if (isTruthy(preventScroll)) {
    html?.classList.add("no-scroll");
  } else {
    html?.classList.remove("no-scroll");
  }
};
