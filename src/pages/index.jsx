import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MainTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 9rem 0 12rem;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainTitle>
      バンクーバーのデザインエージェンシーで働くWebデベロッパー、たまにデザイナー
    </MainTitle>
    {data.allContentfulMyBlog.nodes.map(node => (
      <article key={node.id}>
        <div className="article__thumbnail">
          <img alt={node.title} src={node.thumbnail.file.url} />
        </div>
        <div className="article__text">
          <h1>{node.title}</h1>
          <span>{node.date}</span>
          <span>{node.category}</span>
          <p>{node.excerpt.excerpt}</p>
          <Link to={node.slug}>Read More</Link>
        </div>
      </article>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulMyBlog {
      nodes {
        title
        slug
        date
        category
        excerpt {
          excerpt
        }
        thumbnail {
          file {
            url
          }
        }
      }
    }
  }
`
