import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { FetchSearchMovies } from 'services/apiMovies';
import { MovieList } from 'components/MovieList/MovieList';

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
          console.log(query);
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
        return data.map(({ id, title }) => ({
          id: id,
          title: title,
        }));
      };

      fetch();
    }
  }, [query]);

  const handleOnSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
    console.log(query);
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
