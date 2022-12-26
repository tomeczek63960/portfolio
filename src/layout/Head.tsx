import React from "react";
import Head from "next/head";
import { isTruthy } from "src/helpers/checkFalsyType";
import { LayoutProps } from "./Layout";

const DocHead: React.FC<LayoutProps> = (props) => (
  <Head>
    <title>{props.title}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="canonical" href={props.url} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    {isTruthy(props.imageUrl) && (
      <meta property="og:image" content={props.imageUrl} />
    )}
    {isTruthy(props.imageUrl) && (
      <meta property="og:image:alt" content={props.imageAlt} />
    )}
    <meta property="og:url" content={props.url} />
    <meta
      name="twitter:card"
      content={isTruthy(props.imageUrl) ? "summary_large_image" : "summary"}
    />
    <meta name="twitter:site" content={props.twitter} />
    <meta name="twitter:creator" content={props.twitter} />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    {isTruthy(props.imageUrl) && (
      <meta property="twitter:image" content={props.imageUrl} />
    )}
    {isTruthy(props.imageAlt) && (
      <meta property="twitter:image:alt" content={props.imageAlt} />
    )}
  </Head>
);

export default DocHead;
