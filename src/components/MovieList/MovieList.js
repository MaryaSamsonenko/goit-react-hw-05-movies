import { useLocation } from 'react-router-dom';
import { List, MovieLink, WrapperLink, Img } from './MovieList.styled';
import propTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, backdrop_path }) => {
        return (
          <li key={id}>
            <Img src={backdrop_path} alt={title} />
            <WrapperLink>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </WrapperLink>
          </li>
        );
      })}
    </List>
  );
};
MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
