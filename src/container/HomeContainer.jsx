import React from 'react';
import { useCharacters, useCount } from '../hooks/appContext';
import CharacterList from '../components/characterlist/CharacterList';
import Pagination from '../components/pagination/Pagination';

function HomeContainer() {
  const characters = useCharacters();
  const count = useCount();

  // console.log('homecontainercharacters', characters);
  return (
    <div>
        This is the main HomeContainer
      <Pagination count={count} />
      <CharacterList characters={characters}/>
    </div>
  );
}

// HomeContainer.propTypes = {

// };

export default HomeContainer;

