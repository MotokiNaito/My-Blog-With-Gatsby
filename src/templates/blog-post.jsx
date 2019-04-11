import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>{data.contentfulMyBlog.title}</h1>
    <div>{data.contentfulMyBlog.content.content}</div>
  </Layout>
)

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    contentfulMyBlog(slug: { eq: $slug }) {
      title
      date
      content {
        content
      }
    }
  }
`
