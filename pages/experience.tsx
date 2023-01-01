import React from "react";
import type { NextPage } from "next";
import Layout from "src/layout/Layout";
import Experience from "src/views/Experience";

const HomePage: NextPage = () => {
  return (
    <Layout title="Experience page" description="Experience page" url="here">
      <Experience />
    </Layout>
  );
};

export default HomePage;
