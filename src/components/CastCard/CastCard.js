import propTypes from 'prop-types';
import { CastList, CastImg, CastTitle, CastText } from './CastCard.styled';

export const CastCard = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ profile_path, character, name, id }) => (
        <li key={id}>
          <div>
            <CastImg src={profile_path} alt={name} />
          </div>
          <div>
            <CastTitle>{name}</CastTitle>
            <CastText>
              Character:
              <br /> {character}
            </CastText>
          </div>
        </li>
      ))}
    </CastList>
  );
};

CastCard.propTypes = {
  cast: propTypes.arrayOf(propTypes.object).isRequired,
};
