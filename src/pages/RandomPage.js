import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card';
import { Button } from '../Components/Button';
import { ReactComponent as QuestionLogo } from '../Resources/question.svg';

const RandomPage = ({ characters }) => {
  const [randomCharacter, setRandomCharacter] = useState();
  const navigate = useNavigate();

  // Helper function (Get random ID)
  const getRandomID = max => {
    return Math.floor(Math.random() * max) + 1;
  };

  // Helper function (Set random Character with API fetch result)
  const loadCharacters = (url, randomID) => {
    fetch(url + randomID)
      .then(response => response.json())
      .then(data => setRandomCharacter(data));
  };

  const getRandomCharacter = () => {
    const randomID = getRandomID(characters.length);
    const randomResult = characters.find(
      character => character.id === randomID
    );
    setRandomCharacter(randomResult);
  };

  const getRandomAPICharacter = () => {
    const CharacterRandomID = getRandomID(826);
    const basicUrl = 'https://rickandmortyapi.com/api/character/';

    loadCharacters(basicUrl, CharacterRandomID);
  };

  return (
    <main>
      <ul className="Random-Cards-Container">
        {randomCharacter ? (
          <Card
            key={randomCharacter.id}
            image={randomCharacter.image}
            name={randomCharacter.name}
            gender={randomCharacter.gender}
            id={randomCharacter.id}
            species={randomCharacter.species}
            status={randomCharacter.status}
            location={randomCharacter.location.name}
            origin={randomCharacter.origin.name}
            detailsMode={false}
            bookmarking={false}
            isbookmarked={false}
            onClickCallback={() => navigate(`/details/${randomCharacter.id}`)}
          />
        ) : (
          <QuestionLogo style={{ width: '500px' }} />
        )}
        <Button onClick={getRandomCharacter}>Get Random Character</Button>
        <Button onClick={getRandomAPICharacter}>
          Get Random API Character
        </Button>
      </ul>
    </main>
  );
};

export default RandomPage;
