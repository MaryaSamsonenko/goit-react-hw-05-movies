import { useState, useEffect } from 'react';
import { FetchTrendingMovies } from '../services/apiMovies';
import { MovieList } from '../components/MovieList/MovieList';
import { Container } from '../components/Container/Container';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        setError('');
        const { results } = await FetchTrendingMovies();
        const updatedData = formatData(results);
        setMovies(updatedData);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    const formatData = data => {
      return data.map(item => ({ id: item.id, title: item.title }));
    };

    fetch();
  }, []);

  return (
    <Container>
      {loading && <h3>Loading...</h3>}
      {movies && !loading && !error && (
        <>
          <p>Trending today</p>
          <MovieList movies={movies} />
        </>
      )}
      {error && <h3>Something went wrong, please try again</h3>}
    </Container>
  );
};
