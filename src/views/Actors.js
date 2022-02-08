import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCreditsMovies } from 'services/apiMovies';
import { ActorsCard } from 'components/ActorsCard/ActorsCard';
// import { Loader } from 'components/Loader/Loader';

export const Actors = () => {
  const { movieId } = useParams();
  const [actors, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError('');
        const { cast } = await FetchCreditsMovies(movieId);
        const updatedActors = formatData(cast);
        setCast(updatedActors);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const formatData = actors => {
      return actors.map(({ id, name, character, profile_path }) => ({
        id: id,
        name: name,
        character: character,
        profile_path: profile_path
          ? `https://image.tmdb.org/t/p/w300/${profile_path}`
          : 'https://vjoy.cc/wp-content/uploads/2020/10/1-36-1024x1024-1.jpg',
      }));
    };

    fetch();
  }, [movieId]);

  return (
    <>
      {loading && <h3>...Loading</h3>}
      {error && <h3>Something went wrong, please try again</h3>}
      {!error && !loading && actors && <ActorsCard actors={actors} />}
    </>
  );
};
