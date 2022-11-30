import React from 'react';
import Layout from 'src/layout/Layout';
import Contact from 'src/views/Contact';
import type { NextPage } from 'next'
import Performence from "../../public/svg/performence.svg"

const ContactPage: NextPage = () => {
  return (
    <Layout
      title="Home page"
      description="Home page"
      url="here"
    >
      {/* animacja wysokości słópków i na ostatnim niech siedzi ten człowiek zeby uzyskać fajny efekt */}
      <Performence />
      <Contact />
    </Layout>
  );
}

export default ContactPage;