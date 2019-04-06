import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  background-color: #ccc;
`

const Header = () => (
  <HeaderContainer>
    <header>
      <h1>
        <Link to="/">Motoki's Blog</Link>
      </h1>
    </header>
  </HeaderContainer>
)

export default Header
