import React, { FC } from "react";
import { isTruthy } from "src/helpers/checkFalsyType";
// import type { NextPage } from "next";
import Layout from "src/layout/Layout";
import ComponentContent from "src/ui/Content";
import { getEnvVars } from "src/helpers/getEnvVars";

// TODO: in skills add next carousel & add prismic.io, hygraph, builder.io ...
// Add seo values for pages in strapi

// TODO: add tests to all components
// _________
// TODO: scrollbar ma być taki jak na macu (globalnie ostylowany)
// TODO: fix gps on loading animation

interface IPage {
  page: {
    PageContent: any[];
    SeoTitle: string;
    SeoDescription: string;
  };
}
// const HomePage: NextPage = ({ page }) => {
const HomePage: FC<IPage> = ({ page }) => {
  // const page = props.page;
  console.log(page, " page here");
  return (
    // <Layout title="home" description="home" url="here">
    //   <Home />
    // </Layout>
    <Layout title="Title" description="Description" url="here">
      {page?.PageContent.map((content: any) => (
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
    `${getEnvVars().apiUrl}/static-pages?_locale=${locale}&Slug=Home`
  );
  const page = await res.json();

  return {
    props: {
      page: isTruthy(page[0]) ? page[0] : null,
    },
  };
}

export default HomePage;
