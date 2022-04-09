import { useState } from 'react';
import Card from '../Components/Card';
import { Button } from '../Components/Button';
import {ReactComponent as QuestionLogo} from '../Resources/question.svg'

const RandomPage = ({ characters }) => {
const [randomID, setRandomID] = useState();


  // const setRandomCharacter = () => {

  //   const id = Math.floor(Math.random() * (characters.length-1 - 1)) + 1;
  //   const randomCharacter = characters.find(character => {return character.id === id});
  //   setRandomID(id)
  // }

  //   const currentCharacter = (characters.find(character => character.id == id))

    return (
      <main>
           <ul className='Cards-Container'>{randomID ?
        (<Card
            key={characters.id}
            image={characters.image}
            name={characters.name}
            gender={characters.gender}
            id={characters.id}
            species={characters.species}
            status={characters.status}
            location={characters.location.name}
            origin={characters.origin.name}
            detailsMode={false}
            bookmarking={false}
            isbookmarked={false}
          /> ) : (
          <>
          <QuestionLogo style={{width: "500px"}}/>
          {/* <Button onClick={setRandomCharacter}>Random Character</Button> */}
          </>
        )
        }
        </ul>  
         
      </main>
    );
  };
  
  export default RandomPage