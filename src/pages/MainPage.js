import Card from './../Components/Card';

const MainPage = ({ characters, favCharacterIDs }) => {
  return (
    <main>
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
            detailsMode={false}
            bookmarking={false}
          />
        ))}
      </ul>
    </main>
  );
};

export default MainPage
