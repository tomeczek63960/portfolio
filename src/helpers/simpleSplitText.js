const createHtml = (text, classes) =>
  `<span class="${classes}" data-animate="true">${text}</span>`;

export const simpleSplitText = (el, exceptions = []) => {
  const text = el.innerText.replaceAll(/\r?\n|\r|\n/g, " <br/> ");
  const wordsArray = text.split(" ");

  let html = "";
  wordsArray.forEach((word) => {
    let wordHtml = "";
    const lettersArray = word.split("");
    let additionalClass = "";

    if (exceptions.includes(word)) {
      additionalClass = "splitted-emoji";
    }
    if (word === "<br/>") {
      wordHtml = word;
    } else {
      lettersArray.forEach((letter) => {
        // prevent to split emoji text
        const isCharacter =
          letter.toLowerCase() !== letter.toUpperCase() ||
          letter === "’" ||
          letter === "," ||
          letter === "‐" ||
          letter === "-" ||
          letter === "&" ||
          letter === "." ||
          parseInt(letter);
        const a = isCharacter ? createHtml(letter, "splitted-text") : letter;
        wordHtml = wordHtml + a;
      });
    }

    html =
      html + ` ${createHtml(wordHtml, `splitted-words ${additionalClass}`)} `;
  });

  el.innerHTML = html;
  const chars = el.querySelectorAll(".splitted-words .splitted-text");

  return {
    chars,
  };
};
