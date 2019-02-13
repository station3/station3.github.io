import React from "react"

import Layout from "components/Layout"
import Image from "components/image"
import SEO from "components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imgSrc="a.jpg" />
    </div>
  </Layout>
)

export default IndexPage
