import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchDetailsMovies } from 'services/apiMovies';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import {
  GoBackLink,
  Hr,
  NotificationTitle,
  TitleLink,
  WrapperTitleLink,
} from 'components/HomeStyle/Home.styled';

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
    <>
      <Section>
        <Container>
          <GoBackLink to={location?.state?.from ?? '/'}>Go back</GoBackLink>
          {loading && <NotificationTitle>...Loading</NotificationTitle>}
          {error && (
            <NotificationTitle>
              Something went wrong, please try again
            </NotificationTitle>
          )}
          {!error && !loading && movie && <MovieCard movie={movie} />}
        </Container>
      </Section>
      <Hr />
      <Section>
        <Container>
          <WrapperTitleLink>
            <TitleLink state={{ from: location?.state?.from }} to={'cast'}>
              Cast
            </TitleLink>
            <TitleLink state={{ from: location?.state?.from }} to={'reviews'}>
              Reviews
            </TitleLink>
          </WrapperTitleLink>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
