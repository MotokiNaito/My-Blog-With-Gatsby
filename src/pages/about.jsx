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
    <SEO title="About" />
    <About>
      <h1>About</h1>
      <p>
        バンクーバーのデザインエージェンシーで働いてるデベロッパーです。たまにデザインもしたりします。
      </p>
      <h2>略歴</h2>
      <ul>
        <li>２０１４年　：　６ヶ月フィリピン留学</li>
        <li>
          ２０１４年　：　通信制の学校に通いながらウェブデザイナーを目指す
        </li>
        <li>
          ２０１５年　：　無事ウェブデザイナーとしてキャリアをスタートしたが半年でその会社を辞める
        </li>
        <li>２０１６年　：　カナダに渡航。専門学校に通い始める</li>
        <li>
          ２０１７年　：　カナダのデザインエージェンシーに就職。今も同じ会社で働いている
        </li>
      </ul>
      <h2>連絡先</h2>
      <p>
        <a href="mailto:motoki.developer@gmail.com">
          motoki.developer@gmail.com
        </a>
      </p>
    </About>
  </Layout>
)

export default AboutPage
