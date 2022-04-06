import Card from './../Components/Card';
import { useParams } from 'react-router-dom';

const DetailedPage = ({ characters }) => {
    const { id } =useParams()
    const currentCharacter = (characters.find(character => character.id == id))

  return (
    <main>
        <ul className='Cards-Container'>
            <Card
            key={currentCharacter.id}
            image={currentCharacter.image}
            name={currentCharacter.name}
            gender={currentCharacter.gender}
            id={currentCharacter.id}
            species={currentCharacter.species}
            status={currentCharacter.status}
            location={currentCharacter.location.name}
            origin={currentCharacter.origin.name}
            mode={true}
            bookmarking={true}
          /> 
        </ul>
    </main>
  );
};

export default DetailedPage