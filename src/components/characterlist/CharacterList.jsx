import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {


  const listElement = characters.map((character, i) => {
    return (
      <li key={i} >
        <img src={character.photoUrl} />
        <p>{character.name}</p>
        <p>{character.allies}</p>
        <p>{character.enemies}</p>
        <p>{character.affiliations}</p>
      </li>
    );
  });

  return (
    <ul>
      {listElement}
    </ul>
  );

};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default CharacterList;
