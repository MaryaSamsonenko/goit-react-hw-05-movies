import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { FetchDetailsMovies } from 'services/apiMovies';
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

          const { data } = await FetchDetailsMovies(query);
          const updatedMovies = formatData(data);
          setMovies(updatedMovies);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      const formatData = data => {
        return data.map(item => ({ id: item.id, title: item.title }));
      };

      fetch();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />

      {loading && <h2>Loading...</h2>}
      {error && <h3>Something went wrong, please try again</h3>}
      {movies && !loading && !error && <MovieList movies={movies} />}
      {movies && !loading && !error && movies.length === 0 && (
        <h3>Nothing found for this query</h3>
      )}
    </div>
  );
};
