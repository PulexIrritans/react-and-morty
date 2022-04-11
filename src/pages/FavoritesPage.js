import { useState } from 'react';
import { useEffect } from 'react';
import Card from './../Components/Card';

const FavoritesPage = ({ favcharacterIDs, handleBookmarking }) => {
  
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const loadCharacters = () => {
  const basicUrl = 'https://rickandmortyapi.com/api/character/';
  
  if (favcharacterIDs.length>1) { 
    console.log(basicUrl+favcharacterIDs)
    fetch(basicUrl+favcharacterIDs)
  .then(response => response.json())
  .then(data => setFavoriteCharacters(data))
   }
  else if (favcharacterIDs.length ===1) {
    console.log(favcharacterIDs.toString())
    fetch(basicUrl+favcharacterIDs.toString())
  .then(response => response.json())
  .then(data => setFavoriteCharacters([data]))
  } else {
    setFavoriteCharacters([])
  }
  }
  useEffect(() => {
    loadCharacters()
  }, [favcharacterIDs]);

  return (
    <main>
      <ul className="Cards-Container">
        {favoriteCharacters.length>0 ? (favoriteCharacters.map(
            character => 
              (
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
        ) :
         (
          <p>You don't have any favorites set, yet.</p>
        )
        }
      </ul>
    </main>
  );
};

export default FavoritesPage;
