export const getAvatarCharactersList = count => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${count}`)
    .then(res => res.json())
    .then((characters) => characters.map(character => {
      return {
        id: character._id, 
        allies: character.allies,
        enemies: character.enemies, 
        photoUrl: character.photoUrl, 
        name: character.name, 
        affiliations: character.affiliations
      };
    }));
};
