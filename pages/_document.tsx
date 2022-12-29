import React, { ReactElement } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = (): ReactElement => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Oriya:wght@400;500;600;700&
family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@400;700;900&family=Poppins:wght@400;700;900&display=swap"
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
};
export default Document;
