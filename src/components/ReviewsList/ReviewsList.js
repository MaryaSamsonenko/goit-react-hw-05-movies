import propTypes from 'prop-types';
import { ReviewsTitle, ReviewsText, ReviewsItem } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewsItem key={id}>
            <ReviewsTitle>Author: {author}</ReviewsTitle>
            <ReviewsText>{content}</ReviewsText>
          </ReviewsItem>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};
