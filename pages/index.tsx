import React, { FC } from "react";
import { isTruthy } from "src/helpers/checkFalsyType";
import Layout from "src/layout/Layout";
import ComponentContent from "src/ui/Content";
import { getEnvVars } from "src/helpers/getEnvVars";
import { IPage, TPageContent, IPropsPage, IStaticPath } from "src/types";

const HomePage: FC<IPage> = ({ page }) => {
  return (
    <Layout
      title={page?.SeoTitle}
      description={page?.SeoDescription}
      url={getEnvVars().apiUrl + page.locale === "pl" ? "/pl" : ""}
    >
      {page?.PageContent.map((content: TPageContent) => (
        <ComponentContent content={content} key={content.id} />
      ))}
    </Layout>
  );
};
export async function getStaticProps({
  locale,
}: IStaticPath): Promise<IPropsPage> {
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
