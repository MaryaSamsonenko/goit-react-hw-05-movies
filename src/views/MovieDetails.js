import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FetchDetailsMovies } from 'services/apiMovies';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Container } from 'components/Container/Container';
// import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError('');
        const movie = await FetchDetailsMovies(movieId);
        const updatedMovie = formatData(movie);
        setMovie(updatedMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const formatData = ({
      poster_path,
      release_date,
      vote_average,
      genres,
      overview,
      title,
      id,
    }) => {
      const updatedMovie = {
        poster_path: poster_path
          ? `https://image.tmdb.org/t/p/w300/${poster_path}`
          : 'https://www.kinonews.ru/images2/noposter160x213.jpg',
        release_date: release_date.slice(0, 4),
        vote_average: vote_average * 10,
        genres: genres.map(genre => genre.name),
        overview: overview,
        title: title,
        id: id,
      };

      return updatedMovie;
    };

    fetch();
  }, [movieId]);

  return (
    <Container>
      <button to={location?.state?.from ?? '/'}>Go back</button>
      {loading && <h3>...Loading</h3>}
      {error && <h2>Something went wrong, please try again</h2>}
      {!error && !loading && movie && <MovieCard movie={movie} />}
      <hr />
      <div>
        <Link to={'actors'}>Actors</Link>
        <Link to={'reviews'}>Reviews</Link>
      </div>
      <Outlet />
    </Container>
  );
};
