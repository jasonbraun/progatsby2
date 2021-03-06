import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Listing from '../components/listing'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Listing />
  </Layout>
)

export default IndexPage
