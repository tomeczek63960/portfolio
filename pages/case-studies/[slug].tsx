import type { NextPage } from 'next'
import React from 'react';
import Layout from 'src/layout/Layout';
import CaseStudy from 'src/views/CaseStudy';

const CaseStudyPage: NextPage = (props: any) => {
  return (
    <Layout>
      <CaseStudy />
    </Layout>
  );
}

export default CaseStudyPage;