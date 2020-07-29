import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import styles from './RightNav.module.css'
import cx from 'classnames';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 10;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul className={styles.menu} open={open}>
        <NavLink exact={true} activeClassName={styles.current} className={cx(styles.item)} to="/home">Home</NavLink>
        <NavLink activeClassName={styles.current} className={styles.item} to="/store">Store</NavLink>
    </Ul>
  )
}

export default RightNav