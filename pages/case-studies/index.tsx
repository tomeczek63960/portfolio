// import type { NextPage } from "next";
import React, { FC } from "react";
import Layout from "src/layout/Layout";
import ComponentContent from "src/ui/Content";
import axios from "axios";
import { isTruthy } from "src/helpers/checkFalsyType";

interface IPage {
  page: {
    PageContent: any[];
    SeoTitle: string;
    SeoDescription: string;
  };
  projects: any[];
}
const CaseStudiesPage: FC<IPage> = ({ page, projects }) => {
  return (
    // <Layout title="Home page" description="Home page" url="here">
    //   <CaseStudies />
    // </Layout>
    <Layout title="Title" description="Description" url="here">
      {page?.PageContent.map((content: any) => (
        <ComponentContent
          content={content}
          projects={projects}
          key={content.id}
        />
      ))}
    </Layout>
  );
};

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<any> {
  const page = await axios.get(
    `http://localhost:1337/static-pages?_locale=${locale}&Slug=/case-studies`
  );
  const projects = await axios.get("http://localhost:1337/projects?_locale=en");

  return {
    props: {
      page: isTruthy(page.data[0]) ? page.data[0] : null,
      projects: projects?.data,
    },
  };
}

export default CaseStudiesPage;
