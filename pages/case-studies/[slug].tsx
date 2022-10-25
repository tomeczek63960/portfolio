import type { NextPage } from 'next'
import React from 'react';
import Layout from 'src/layout/Layout';
import CaseStudy from 'src/views/CaseStudy';


// pages/blog/[slug].js
// export const getStaticPaths = ({ locales }) => {
//   return {
//     paths: [
//       // if no `locale` is provided only the defaultLocale will be generated
//       { params: { slug: 'post-1' }, locale: 'en-US' },
//       { params: { slug: 'post-1' }, locale: 'fr' },
//     ],
//     fallback: true,
//   }
// }
const CaseStudyPage: NextPage = (props: any) => {
  return (
    <Layout
      title="Home page"
      description="Home page"
      url="here"
    >
      <CaseStudy />
    </Layout>
  );
}

export default CaseStudyPage;