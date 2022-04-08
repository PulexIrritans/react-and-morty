import Card from './../Components/Card';

const FavoritesPage = ({ characters, favcharacterIDs, handleBookmarking }) => {
  console.log(characters);
  return (
    <main>
      <ul className="Cards-Container">
        {characters.map(character =>
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
            />
          ) : (
            ''
          )
        )}
      </ul>
    </main>
  );
};

export default FavoritesPage;
