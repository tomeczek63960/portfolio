import React from 'react';
import Layout from 'src/layout/Layout';
import Contact from 'src/views/Contact';
import type { NextPage } from 'next'

const ContactPage: NextPage = () => {
  return (
    <Layout
      background="orange"
    >
      <Contact />
    </Layout>
  );
}

export default ContactPage;