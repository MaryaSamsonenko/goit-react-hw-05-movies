import propTypes from 'prop-types';
import {
  WrapperCard,
  MovieContentWrapper,
  MoviePoster,
  MovieTitle,
  MovieSubtitle,
  MovieText,
} from './MovieCard.styled';
export const MovieCard = ({
  movie: { title, poster_path, release_date, vote_average, overview, genres },
}) => {
  return (
    <WrapperCard>
      <div>
        <MoviePoster src={poster_path} alt={title} />
      </div>
      <MovieContentWrapper>
        <MovieTitle>
          {title} ({release_date})
        </MovieTitle>
        <MovieText>User score: {vote_average}</MovieText>
        <MovieSubtitle>Overview</MovieSubtitle>
        <MovieText>{overview}</MovieText>
        <MovieSubtitle>Genres</MovieSubtitle>
        <MovieText>{genres.join(', ')}</MovieText>
      </MovieContentWrapper>
    </WrapperCard>
  );
};

MovieCard.propTypes = {
  movie: propTypes.object.isRequired,
};
