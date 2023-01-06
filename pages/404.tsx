import React from "react";
import type { NextPage } from "next";
import Layout from "src/layout/Layout";
import Heading from "src/ui/Heading";
import { useIntl } from "react-intl";
import Error404 from "src/ui/404";
import { getEnvVars } from "src/helpers/getEnvVars";

const Page404: NextPage = () => {
  const intl = useIntl();
  return (
    <Layout
      title="Error 404"
      description="Page not found"
      url={`${getEnvVars().apiUrl}${intl.locale === "pl" ? "/pl" : ""}`}
    >
      <Heading
        heading={{
          HeadingType: "h2",
          Color: "white",
          HoverColor: "error",
          SelectionColor: "error",
          Text: [
            {
              Text: intl.messages["page.error-404"].toString(),
              __v: 0,
              id: `123`,
              _id: `123`,
            },
          ],
          id: "",
          Exceptions: "",
        }}
      />
      <Error404 />
    </Layout>
  );
};

export default Page404;
