import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  background-color: #b6dbfc;
  padding: 40px 0;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 60px;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  transition: color 250ms linear;
  color: #163561;
  &.active {
    color: #fbb400;
  }
`;
