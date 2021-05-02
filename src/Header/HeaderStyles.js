import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  margin: 2rem 0 0 4.5rem;
`;

const MenuBar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 4.45rem;
  line-height: 0.5;
`;

const MenuItem = styled.li`
  margin-left: 1.625rem;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #636363;
`;

export {
  StyledHeader, MenuBar, MenuItem, StyledLink,
};
