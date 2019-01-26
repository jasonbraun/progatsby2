import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor amet disrupt raclette dolore, est shabby chic tbh sint try-hard slow-carb chambray. Keffiyeh mlkshk et gentrify blue bottle YOLO wayfarers dreamcatcher officia bespoke. IPhone in fashion axe pok pok bitters fingerstache. Ex leggings raclette occaecat. Qui adipisicing hell of, kickstarter letterpress kale chips keffiyeh offal kogi aesthetic next level vaporware magna viral proident. YOLO blue bottle ethical, beard humblebrag banh mi vaporware polaroid chicharrones portland plaid officia. Voluptate quis butcher etsy mixtape banjo affogato pickled occupy fixie lorem in proident woke hella.</p>
    </div>
  </Layout>
)

export default About
