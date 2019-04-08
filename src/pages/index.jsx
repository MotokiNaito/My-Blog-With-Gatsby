import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MainTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 9rem 0 10rem;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainTitle>
      バンクーバーのデザインエージェンシーで働くWebデベロッパー、たまにデザイナー
    </MainTitle>
    {data.allContentfulMyBlog.nodes.map(node => (
      <article key={node.id}>
        <h1>{node.title}</h1>
      </article>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulMyBlog {
      nodes {
        id
        title
      }
    }
  }
`
