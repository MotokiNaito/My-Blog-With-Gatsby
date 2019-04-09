import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CategoriesPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Categories</h1>
  </Layout>
)

export default CategoriesPage
