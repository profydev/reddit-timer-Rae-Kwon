import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  margin: 1.55rem 0 0 4.5rem;
`;

const MenuBar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 5.5rem;
`;

const MenuItem = styled.li`
  padding-left: 1.5rem;
  color: #636363;
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/"><img src="/assets/logo.svg" alt="Reddit Timer Logo" /></Link>
      <MenuBar>
        <MenuItem><Link to="/search">Search</Link></MenuItem>
        <MenuItem><Link to="/#how-it-works">How it Works</Link></MenuItem>
        <MenuItem><Link to="/#about">About</Link></MenuItem>
      </MenuBar>
    </StyledHeader>
  );
}

export default Header;
