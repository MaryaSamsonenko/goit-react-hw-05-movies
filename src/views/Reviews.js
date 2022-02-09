import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchReviewsMovies } from 'services/apiMovies';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { NotificationTitle } from 'components/HomeStyle/Home.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError('');
        const { results } = await FetchReviewsMovies(movieId);
        const updatedReviews = formatData(results);
        setReviews(updatedReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const formatData = reviews => {
      return reviews.map(({ id, author, content }) => ({
        id: id,
        author: author,
        content: content,
      }));
    };

    fetch();
  }, [movieId]);

  return (
    <>
      {loading && <NotificationTitle>Loading...</NotificationTitle>}
      {error && (
        <NotificationTitle>
          Something went wrong, please try again
        </NotificationTitle>
      )}
      {!error && !loading && reviews && reviews.length > 0 && (
        <ReviewsList reviews={reviews} />
      )}
      {!error && !loading && reviews && reviews.length === 0 && (
        <NotificationTitle>
          There are no reviews for this movie yet
        </NotificationTitle>
      )}
    </>
  );
};
