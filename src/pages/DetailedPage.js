import Card from './../Components/Card';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailedPage = ({ characters, handleBookmarking, favcharacterIDs }) => {
    const { id } =useParams()
    const [detailedCharacter, setDetailedCharacter] = useState();

    const loadCharacters = () => {
      const basicUrl = 'https://rickandmortyapi.com/api/character/';
      fetch(basicUrl+id)
        .then(response => response.json())
        .then(data => setDetailedCharacter(data));
    };

    loadCharacters()
      

  return (
    <main>
        <ul className='Cards-Container'>{detailedCharacter &&
        (<Card
            key={detailedCharacter.id}
            image={detailedCharacter.image}
            name={detailedCharacter.name}
            gender={detailedCharacter.gender}
            id={detailedCharacter.id}
            species={detailedCharacter.species}
            status={detailedCharacter.status}
            location={detailedCharacter.location.name}
            origin={detailedCharacter.origin.name}
            detailsMode={true}
            bookmarking={true}
            handleBookmarking={() => handleBookmarking(detailedCharacter.id)}
            isbookmarked={favcharacterIDs.includes(detailedCharacter.id)}
            onClickCallback={() =>{}}
          /> )
        }
        </ul>
    </main>
  );
};

export default DetailedPage