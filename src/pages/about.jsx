import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About</h1>
    <p>バンクーバーのデザインエージェンシーで働いてるデベロッパーです。たまにデザインもしたりします。
    </p>
    <h2></h2>
  </Layout>
)

export default AboutPage
