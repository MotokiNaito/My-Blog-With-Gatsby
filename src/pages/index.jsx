import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MainTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 9rem 0 14rem;
  @media (max-width: 880px) {
    margin: 2.5rem 0 6rem;
  }
`

const Article = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .article__thumbnail {
    width: 50%;
    overflow: hidden;
    @media (max-width: 880px) {
      width: 100%;
    }
    img {
      transition: transform 0.3s ease-out;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
  .article__text {
    width: 50%;
    padding-left: 4rem;
    @media (max-width: 880px) {
      width: 100%;
      padding-left: 0;
      margin-top: 2rem;
    }
    p {
      font-size: 1.4rem;
      line-height: 1.8;
    }
    .meta {
      color: #999;
      letter-spacing: 1px;
      &__date {
        margin-right: 2rem;
      }
    }
    .link__readmore {
      color: #999;
      transition: color 0.3s ease-out;
      letter-spacing: 2px;
      &:hover {
        color: #222;
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <MainTitle>
      バンクーバーのデザインエージェンシーで働くWebデベロッパー、たまにデザイナー
    </MainTitle>
    {data.allContentfulMyBlog.nodes.map(node => (
      <Article key={node.id}>
        <div className="article__thumbnail">
          <Link to={node.slug}>
            <img alt={node.title} src={node.thumbnail.file.url} />
          </Link>
        </div>
        <div className="article__text">
          <h1>{node.title}</h1>
          <div className="meta">
            <span className="meta__date">{node.date}</span>
            <span className="meta__category">{node.category}</span>
          </div>
          <p>{node.excerpt.excerpt}</p>
          <Link className="link__readmore" to={node.slug}>
            Read More
          </Link>
        </div>
      </Article>
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
        slug
        date(formatString: "MMM DD, YYYY")
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
