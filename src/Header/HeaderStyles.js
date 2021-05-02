import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #636363;
`;

export {
  StyledHeader, MenuBar, MenuItem, StyledLink,
};
