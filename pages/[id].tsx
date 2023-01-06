import React, { FC } from "react";
import { isTruthy } from "src/helpers/checkFalsyType";
import Layout from "src/layout/Layout";
import ComponentContent from "src/ui/Content";
import { getEnvVars } from "src/helpers/getEnvVars";
import {
  IPage,
  IPropsPage,
  IStaticPath,
  TPageContent,
  IStrapiPage,
  IGetStaticPathsReturn,
} from "src/types";

const Pages: FC<IPage> = ({ page }) => {
  return (
    <Layout title="Title" description="Description" url="here">
      {page?.PageContent.map((content: TPageContent) => (
        <ComponentContent content={content} key={content.id} />
      ))}
    </Layout>
  );
};

export async function getStaticPaths(): Promise<IGetStaticPathsReturn> {
  const res = await fetch(
    `${getEnvVars().apiUrl}/static-pages?_locale=pl&_locale=en`
  );

  const pages = await res.json();
  const paths: IStaticPath[] = [];
  pages?.forEach((page: IStrapiPage) => {
    paths.push({
      params: { id: page.Slug },
      locale: page.locale,
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  locale,
  params,
}: IStaticPath): Promise<IPropsPage> {
  const res = await fetch(
    `${getEnvVars().apiUrl}/static-pages?_locale=${locale}&Slug=${params.id}`
  );
  const page = await res.json();

  return {
    props: {
      page: isTruthy(page[0]) ? page[0] : null,
    },
  };
}

export default Pages;
