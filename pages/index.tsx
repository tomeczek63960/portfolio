import React, { FC } from "react";
import { isTruthy } from "src/helpers/checkFalsyType";
// import type { NextPage } from "next";
import Layout from "src/layout/Layout";
// import Home from "src/views/Home";
import ComponentContent from "src/ui/Content";

interface IPage {
  // page: any;
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
    `http://localhost:1337/static-pages?_locale=${locale}&Slug=Home`
  );
  const page = await res.json();

  return {
    props: {
      page: isTruthy(page[0]) ? page[0] : null,
    },
  };
}

export default HomePage;
