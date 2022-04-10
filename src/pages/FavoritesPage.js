import Card from './../Components/Card';

const FavoritesPage = ({ characters, favcharacterIDs, handleBookmarking }) => {
  //Some desparate attempts to create a map fetch of all favIDs. Seems not the right reasoning.

  // const loadCharacters = (id) => {
  //   const basicUrl = 'https://rickandmortyapi.com/api/character/';
  //   fetch(basicUrl+id)
  //     .then(response => response.json())
  //     .then(data => setFavoriteCharacter(favoriteCharacters.push(data)));
  // };

  // const favCharactersList = favcharacterIDs.map( fav => loadCharacters(fav.id))
  // console.log(favCharactersList)

  return (
    <main>
      <ul className="Cards-Container">
        {favcharacterIDs.length > 0 ? (
          characters.map(
            character =>
              favcharacterIDs.includes(character.id) && (
                <Card
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  gender={character.gender}
                  id={character.id}
                  species={character.species}
                  status={character.status}
                  location={character.location.name}
                  origin={character.origin.name}
                  detailsMode={true}
                  bookmarking={true}
                  handleBookmarking={() => handleBookmarking(character.id)}
                  isbookmarked={favcharacterIDs.includes(character.id)}
                  onClickCallback={() => {}}
                />
              )
          )
        ) : (
          <p>You don't have any favorites set, yet.</p>
        )}
      </ul>
    </main>
  );
};

export default FavoritesPage;
