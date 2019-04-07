import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MainTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 9rem 0 10rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainTitle>
      バンクーバーのデザインエージェンシーで働くWebデベロッパー、たまにデザイナー
    </MainTitle>
  </Layout>
)

export default IndexPage
