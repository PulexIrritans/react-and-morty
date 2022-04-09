import { useState } from 'react';
import Card from '../Components/Card';
import { Button } from '../Components/Button';
import { ReactComponent as QuestionLogo } from '../Resources/question.svg';

const RandomPage = ({ characters }) => {
  const [randomCharacter, setRandomCharacter] = useState();

  const getRandomCharacter = () => {
    const randomID =
      Math.floor(Math.random() * (characters.length - 1 - 1)) + 1;
    const randomResult = characters.find(
      character => character.id === randomID
    );
    setRandomCharacter(randomResult);
  };

  return (
    <main>
      <ul className="Random-Cards-Container">
        {randomCharacter ? (
          <>
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
            />
            <Button onClick={getRandomCharacter}>Get Random Character</Button>
          </>
        ) : (
          <>
            <QuestionLogo style={{ width: '500px' }} />
            <Button onClick={getRandomCharacter}>Get Random Character</Button>
          </>
        )}
      </ul>
    </main>
  );
};

export default RandomPage;
