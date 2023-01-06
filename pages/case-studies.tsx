import React, { FC } from "react";
import Layout from "src/layout/Layout";
import ComponentContent from "src/ui/Content";
import axios from "axios";
import { isTruthy } from "src/helpers/checkFalsyType";
import { getEnvVars } from "src/helpers/getEnvVars";
import { IPage, TPageContent, IPropsPage, IStaticPath } from "src/types";

const CaseStudiesPage: FC<IPage> = ({ page, projects }) => {
  return (
    <Layout title="Title" description="Description" url="here">
      {page?.PageContent.map((content: TPageContent) => (
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
}: IStaticPath): Promise<IPropsPage> {
  const page = await axios.get(
    `${getEnvVars().apiUrl}/static-pages?_locale=${locale}&Slug=/case-studies`
  );
  const projects = await axios.get(
    `${getEnvVars().apiUrl}/projects?_locale=${locale}`
  );

  return {
    props: {
      page: isTruthy(page.data[0]) ? page.data[0] : null,
      projects: projects?.data,
    },
  };
}

export default CaseStudiesPage;
