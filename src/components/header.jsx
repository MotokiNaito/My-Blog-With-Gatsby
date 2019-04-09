import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
`
const Nav = styled.nav`
  a {
    margin-left: 2rem;
  }
`

const Header = () => (
  <HeaderContainer>
    <h1>
      <Link to="/">Web Night</Link>
    </h1>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/categories">Categories</Link>
    </Nav>
  </HeaderContainer>
)

export default Header
