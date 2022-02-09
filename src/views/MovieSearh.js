import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { FetchSearchMovies } from 'services/apiMovies';
import { MovieList } from 'components/MovieList/MovieList';

export const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);
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
    <div>
      <SearchBar onSubmit={handleOnSubmit} />

      {loading && <h2>Loading...</h2>}
      {error && <h3>Something went wrong, please try again</h3>}
      {movies && !loading && !error && <MovieList movies={movies} />}
      {movies && !loading && !error && movies.length === 0 && (
        <h3>Nothing found for this query</h3>
      )}
    </div>
  );
};
