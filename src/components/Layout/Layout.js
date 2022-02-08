import { Outlet, NavLink } from 'react-router-dom';
import { Container } from 'components/Container/Container';
export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
