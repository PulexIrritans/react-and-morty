import Card from './../Components/Card';

const DetailedPage = ({ character }) => {
  return (
    <main>
          <Card
           key={character.id}
           image={character.image}
           name={character.name}
           gender={character.gender}
           isactive={false}
           id={character.id}
           species={character.species}
           status={character.status}
           location={character.location.name}
           origin={character.origin.name}
          />
    </main>
  );
};

export default DetailedPage