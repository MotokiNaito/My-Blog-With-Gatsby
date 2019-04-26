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
      <ul>
        <li>２０１４年　：　６ヶ月フィリピン留学</li>
        <li>２０１４年　：　通信制の学校に通いながらウェブデザイナーを目指す</li>
        <li>２０１５年　：　無事ウェブデザイナーとしてキャリアをスタートしたが半年でその会社を辞める</li>
      </ul>
    </About>
  </Layout>
)

export default AboutPage
