import Card from './../Components/Card';

const MainPage = ({ characters, mode, handleDetails }) => {
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
            mode={mode}
            handleDetails={handleDetails}
          />
        ))}
      </ul>
    </main>
  );
};

export default MainPage
