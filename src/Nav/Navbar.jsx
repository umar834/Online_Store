import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../images/Umaas.png'

const Nav = styled.nav`
  width: 95%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logo} width="130px" height="130px" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar