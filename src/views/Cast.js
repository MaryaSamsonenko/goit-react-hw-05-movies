import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchCreditsMovies } from 'services/apiMovies';
import { CastCard } from 'components/CastCard/CastCard';
import { NotificationTitle } from 'components/HomeStyle/Home.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError('');
        const { cast } = await FetchCreditsMovies(movieId);
        const updatedCast = formatData(cast);
        setCast(updatedCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const formatData = cast => {
      return cast.map(({ id, name, character, profile_path }) => ({
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
      {loading && <NotificationTitle>...Loading</NotificationTitle>}
      {error && (
        <NotificationTitle>
          Something went wrong, please try again
        </NotificationTitle>
      )}
      {!error && !loading && cast && <CastCard cast={cast} />}
    </>
  );
};
