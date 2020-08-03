import React from 'react';
import { useCharacters } from '../hooks/appContext';
import CharacterList from '../components/characterlist/CharacterList';

function HomeContainer() {
  const characters = useCharacters();

  console.log('homecontainercharacters', characters);
  return (
    <div>
        This is the main HomeContainer
      <CharacterList characters={characters}/>
    </div>
  );
}

// HomeContainer.propTypes = {

// };

export default HomeContainer;

