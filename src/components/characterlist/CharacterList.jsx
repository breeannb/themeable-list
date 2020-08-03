import React from 'react';
import { useCharacters } from '../../hooks/appContext';

const CharacterList = () => {
  const character = useCharacters();

  console.log(character);
  return (
    <div>
      <img src={character.photoUrl} alt={character.name} />
      <p>={character.name}</p>
      <p>This is the Character List Page</p>
    </div>
  );
};

export default CharacterList;
