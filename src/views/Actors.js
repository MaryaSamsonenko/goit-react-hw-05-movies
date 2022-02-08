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
      return actors.map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile_path: actor.profile_path
          ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
          : 'https://cdn.shopify.com/s/files/1/0605/0195/0643/products/calm-black__17549_1200x1200.jpg?v=1632960018',
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
