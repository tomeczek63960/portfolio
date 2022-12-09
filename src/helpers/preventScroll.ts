export const preventScroll = (preventScroll?: boolean) => {
  const html = document.querySelector('html');
  if (preventScroll) {
    html?.classList.add('no-scroll');
  } else {
    html?.classList.remove('no-scroll');
  }
}