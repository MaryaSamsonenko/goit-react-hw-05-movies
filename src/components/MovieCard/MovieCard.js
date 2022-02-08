import propTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <div>
        <h3>
          {movie.title} ({movie.release_date})
        </h3>
        <p>User score: {movie.vote_average}</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{movie.genres.join(', ')}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: propTypes.object.isRequired,
};
