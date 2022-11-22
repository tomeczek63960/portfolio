import React from 'react';
import Layout from 'src/layout/Layout';
import Contact from 'src/views/Contact';
import type { NextPage } from 'next'

const ContactPage: NextPage = () => {
  return (
    <Layout
      title="Home page"
      description="Home page"
      url="here"
    >
      <Contact />
    </Layout>
  );
}

export default ContactPage;