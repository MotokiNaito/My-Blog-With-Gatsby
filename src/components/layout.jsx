import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.6;
    margin: 0;
      padding: 0;
  }
  h1, h2, h3, h4 {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #222;
  }
  img {
    display: block;
    max-width: 100%;
  }
  footer {
    margin-top: 12rem;
    margin-bottom: 2rem;
    
  }
`

const Wrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
`
const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Wrapper>
      <main>{children}</main>
      <footer>© Copyright Dev Night 2019</footer>
    </Wrapper>
    <GlobalStyle />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
