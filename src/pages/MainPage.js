import Card from './../Components/Card';
import { useNavigate } from 'react-router-dom';

const MainPage = ({ characters }) => {
  const navigate = useNavigate();

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
            onClickCallback={() => navigate(`details/${character.id}`)}
          />
        ))}
      </ul>
    </main>
  );
};

export default MainPage
