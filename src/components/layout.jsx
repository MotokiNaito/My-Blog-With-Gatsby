import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');

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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  h1, h2, h3, h4 {
    font-family: "Sawarabi Mincho";
    margin: 0;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 3rem;
    letter-spacing: 0.6px;
    margin-top: -1rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
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
