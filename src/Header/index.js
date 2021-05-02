import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeader, MenuBar, MenuItem, StyledLink,
} from './HeaderStyles';

function Header() {
  return (
    <StyledHeader>
      <Link to="/"><img src="/assets/logo.svg" alt="Reddit Timer Logo" /></Link>
      <MenuBar>
        <MenuItem><StyledLink to="/javascript">Search</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/#how-it-works">How it works</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/#about">About</StyledLink></MenuItem>
      </MenuBar>
    </StyledHeader>
  );
}

export default Header;
