import React, { FC } from "react";
import Head from "next/head";
import { isTruthy } from "src/helpers/checkFalsyType";
import { PropsLayout } from "./types";

const DocHead: FC<PropsLayout> = (props) => (
  <Head>
    <title>{props.title}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="canonical" href={props.url} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />

    {isTruthy(props.imageUrl) && (
      <meta property="og:image" content={props.imageUrl} />
    )}
    {isTruthy(props.imageUrl) && (
      <meta property="og:image:alt" content={props.imageAlt} />
    )}
    <meta property="og:url" content={props.url} />
  </Head>
);

export default DocHead;
