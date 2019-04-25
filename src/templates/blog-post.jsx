import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = styled.article`
  margin-top: 6rem;
  .meta-data {
    margin: 3rem 0;
  }
`

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Article>
      <h1>{data.contentfulMyBlog.title}</h1>
      <p className="meta-data">Published {data.contentfulMyBlog.date}</p>
      <div className="main-content">
        {data.contentfulMyBlog.content.content}
      </div>
    </Article>
  </Layout>
)

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    contentfulMyBlog(slug: { eq: $slug }) {
      title
      date(formatString: "MMM DD, YYYY")
      content {
        content
      }
    }
  }
`
