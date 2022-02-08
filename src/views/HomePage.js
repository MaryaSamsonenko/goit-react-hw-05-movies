import { useState, useEffect } from 'react';
import { FetchTrendingMovies } from '../services/apiMovies';
import { MovieList } from '../components/MovieList/MovieList';
import { Container } from '../components/Container/Container';

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
    setPage(prevPage => prevPage + 1);
  };
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
      <button type="button" onClick={handleOnClick}>
        Load more
      </button>
    </Container>
  );
};
