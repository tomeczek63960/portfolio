import React, { FC } from "react";
// import type { NextPage } from "next";
import Layout from "src/layout/Layout";
// import Experience from "src/views/Experience";
import { isTruthy } from "src/helpers/checkFalsyType";
import ComponentContent from "src/ui/Content";

interface IPage {
  page: {
    PageContent: any[];
    SeoTitle: string;
    SeoDescription: string;
  };
}
const ExperiencePage: FC<IPage> = ({ page }) => {
  return (
    // <Layout title="Experience page" description="Experience page" url="here">
    //   <Experience />
    // </Layout>
    <Layout title="Title" description="Description" url="here">
      {page.PageContent.map((content: any) => (
        <ComponentContent content={content} key={content.id} />
      ))}
    </Layout>
  );
};

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<any> {
  const res = await fetch(
    `http://localhost:1337/static-pages?_locale=${locale}&Slug=/experience`
  );
  const page = await res.json();

  return {
    props: {
      page: isTruthy(page[0]) ? page[0] : null,
    },
  };
}

export default ExperiencePage;
