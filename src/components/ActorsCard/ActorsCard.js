import propTypes from 'prop-types';

export const ActorsCard = ({ actors }) => {
  return (
    <ul>
      {actors.map(({ profile_path, character, name, id }) => (
        <li key={id}>
          <div>
            <img src={profile_path} alt={name} />
          </div>
          <div>
            <h4>{name}</h4>
            <p>
              Character:
              <br /> {character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

ActorsCard.propTypes = {
  actors: propTypes.arrayOf(propTypes.object).isRequired,
};
