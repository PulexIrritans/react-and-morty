import Card from './../Components/Card';

const FavoritesPage = ({ characters, favcharacterIDs, handleBookmarking }) => {
  return (
    <main>
      <ul className="Cards-Container">
        { favcharacterIDs.length>0 ? (characters.map(character =>
          favcharacterIDs.includes(character.id) ? (
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
              detailsmode={true}
              bookmarking={true}
              handleBookmarking={handleBookmarking}
              isbookmarked={favcharacterIDs.includes(character.id)}
            />
          ) : (
            ''
          )
        )) : ( <p>You don't have any favorites set, yet</p> ) 
        }
      </ul>
    </main>
  );
};

export default FavoritesPage;
