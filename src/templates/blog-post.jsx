import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data}
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
