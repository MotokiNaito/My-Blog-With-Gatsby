import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = styled.main`
  h1 {
    margin: 6rem 0 3rem;
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <About>
      <h1>About</h1>
      <p>バンクーバーのデザインエージェンシーで働いてるデベロッパーです。たまにデザインもしたりします。
      </p>
      <h2>略歴</h2>
    </About>
  </Layout>
)

export default AboutPage
