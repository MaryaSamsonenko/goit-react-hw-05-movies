import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Header, Nav, NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </Nav>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
