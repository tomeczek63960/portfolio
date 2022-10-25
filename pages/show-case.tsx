import type { NextPage } from 'next'
import Layout from 'src/layout/Layout';
import React from 'react';
import ShowCase from "src/views/ShowCase";

const ShowCasePage: NextPage = () => {
  return (
    <Layout
      background="red"
      title="Home page"
      description="Home page"
      url="here"
    >
      <ShowCase />
    </Layout>
  );
}

export default ShowCasePage;
