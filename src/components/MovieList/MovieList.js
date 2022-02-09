import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title, backdrop_path }) => {
        return (
          <li key={id}>
            <img src={backdrop_path} alt={title} />
            <Link to={`/searchmovies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
