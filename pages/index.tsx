import React, { FC } from "react";
import { isTruthy } from "src/helpers/checkFalsyType";
import Layout from "src/layout/Layout";
import ComponentContent from "src/ui/Content";
import { getEnvVars } from "src/helpers/getEnvVars";
import { IPage, TPageContent, IPropsPage, IStaticPath } from "src/types";

// _________
// TODO: scrollbar ma być taki jak na macu (globalnie ostylowany)
// TODO: fix gps on loading animation
// add contact form handler
// TODO: add lazy loading for components & execute lazy loading on isActive scrolltrigger property
// TODO: add correct margins
// TODO: try to reduce time of introduction svg animation to check if scoring will be beter (also can try with reducing time of loading animation)

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
