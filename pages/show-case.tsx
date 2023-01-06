import React from "react";
import type { NextPage } from "next";
import Layout from "src/layout/Layout";
import ShowCase from "src/views/ShowCase";

const ShowCasePage: NextPage = () => {
  return (
    <Layout title="Show case" description="Show case" url="here">
      <ShowCase />
    </Layout>
  );
};

export default ShowCasePage;
