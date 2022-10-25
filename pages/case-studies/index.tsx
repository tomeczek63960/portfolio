import type { NextPage } from 'next'
import React from 'react';
import Layout from 'src/layout/Layout';
import CaseStudies from 'src/views/CaseStudies';

const CaseStudiesPage: NextPage = () => {
  return (
    <Layout>
      <CaseStudies />
    </Layout>
  );
}

export default CaseStudiesPage;