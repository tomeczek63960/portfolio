import React, { ReactNode } from "react";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function PageDocument(): ReactNode {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Oriya:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@400;700;900&family=Poppins:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

PageDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentsSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          return styledComponentsSheet.collectStyles(<App {...props} />);
        },
      });
    const initialProps = await Document.getInitialProps(ctx);
    initialProps.styles = [
      initialProps.styles,
      styledComponentsSheet.getStyleElement(),
    ];
    return initialProps;
  } finally {
    styledComponentsSheet.seal();
  }
};
