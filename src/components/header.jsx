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
    position: relative;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: bold;
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #333;
      transform: scale(0);
      transition: transform 0.3s ease-out;
      transform-origin: right center;
    }

    &:hover {
      &:after {
        transform: scale(1);
        transform-origin: left center;
      }
    }

    &.is-active {
      cursor: default;
      &:after {
        transform: scale(1);
      }
    }

    @media (max-width: 880px) {
      font-size: 1.4rem;
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <h1>
      <Link to="/">Motoki's Web Dev</Link> 
    </h1>
    <Nav>
      <Link to="/" activeClassName="is-active">Home</Link>
      <Link to="/about" activeClassName="is-active">About</Link>
    </Nav>
  </HeaderContainer>
)

export default Header
