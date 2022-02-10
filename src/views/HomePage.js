import { useState, useEffect } from 'react';
import { FetchTrendingMovies } from '../services/apiMovies';
import { MovieList } from '../components/MovieList/MovieList';
import { Container } from '../components/Container/Container';
import { Section } from 'components/Section/Section';
import {
  TrendingTitle,
  Button,
  NotificationTitle,
} from 'components/HomeStyle/Home.styled';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        setError('');
        const { results } = await FetchTrendingMovies(page);
        const updatedData = formatData(results);
        setMovies(prevMovies => [...prevMovies, ...updatedData]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    const formatData = data => {
      return data.map(({ id, title, backdrop_path }) => ({
        id: id,
        title: title,
        backdrop_path: backdrop_path
          ? `https://image.tmdb.org/t/p/w300/${backdrop_path}`
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiBTdnxCeTWFTxIw8qrl3Vgib35BNu3R5zaNfFi8T76tUqxnQa8Qf5FOeoLDFpxfbWXU&usqp=CAU',
      }));
    };

    fetch();
  }, [page]);

  const handleOnClick = () => {
    setPage(page + 1);
  };

  return (
    <Section>
      <Container>
        {loading && <NotificationTitle>Loading...</NotificationTitle>}
        {movies.length > 0 && !error && (
          <>
            <TrendingTitle>Trending today</TrendingTitle>
            <MovieList movies={movies} />
            <Button type="button" onClick={handleOnClick}>
              Load more
            </Button>
          </>
        )}
        {error && (
          <NotificationTitle>
            Something went wrong, please try again
          </NotificationTitle>
        )}
      </Container>
    </Section>
  );
};
