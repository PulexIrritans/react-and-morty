import Card from './../Components/Card';


const FavoritesPage = ({ characters, handleBookmarking }) => {
    console.log(characters)
      return (
        <main>
         {characters.length > 0 ? (
            <ul className="Cards-Container">
            {characters.map(character => (
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
                mode={true}
                bookmarking={true}
                handleBookmarking={handleBookmarking}
              />
            ))}
          </ul> 
         ) : (
             <p>Sorry, you don't have any favorites set.</p>
         )
         }
        </main>
      );
    };
    
    export default FavoritesPage