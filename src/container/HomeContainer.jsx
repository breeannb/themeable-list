import React from 'react';
import { useCharacters, useCount } from '../hooks/appContext';
import CharacterList from '../components/characterlist/CharacterList';
import Pagination from '../components/pagination/Pagination';

function HomeContainer() {
  const characters = useCharacters();
  const count = useCount();

  return (
    <div>
      <Pagination count={count} />
      <CharacterList characters={characters}/>
    </div>
  );
}

export default HomeContainer;

