import React from 'react';
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
      <img src="/assets/logo.svg" alt="Reddit Timer Logo" />
      <MenuBar>
        <MenuItem>Search</MenuItem>
        <MenuItem>How it Works</MenuItem>
        <MenuItem>About</MenuItem>
      </MenuBar>
    </StyledHeader>
  );
}

export default Header;
