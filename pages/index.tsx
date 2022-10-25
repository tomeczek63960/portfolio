import type { NextPage } from 'next'
import Layout from 'src/layout/Layout'
import Home from 'src/views/Home';

const HomePage: NextPage = () => {
  return (
    <Layout
      background="blue"
    >
      <Home />
    </Layout>
  )
}

export default HomePage;
