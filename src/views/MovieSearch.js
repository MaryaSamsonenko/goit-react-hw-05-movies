import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { FetchSearchMovies } from 'services/apiMovies';
import { MovieList } from 'components/MovieList/MovieList';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { NotificationTitle } from 'components/HomeStyle/Home.styled';

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query && query !== '') {
      const fetch = async () => {
        try {
          setLoading(true);
          setError('');
          const { results } = await FetchSearchMovies(query);
          const updatedMovies = formatData(results);
          setMovies(updatedMovies);
        } catch (error) {
          console.log(error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

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
    }
  }, [query]);

  const handleOnSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleOnSubmit} />
        {loading && <NotificationTitle>Loading...</NotificationTitle>}
        {error && (
          <NotificationTitle>
            Something went wrong, please try again
          </NotificationTitle>
        )}
        {movies && !loading && !error && <MovieList movies={movies} />}
        {movies && !loading && !error && movies.length === 0 && (
          <NotificationTitle>Nothing found for this query</NotificationTitle>
        )}
        <Outlet />
      </Container>
    </Section>
  );
};
