import Card from './../Components/Card';
import { useParams } from 'react-router-dom';

const DetailedPage = ({ characters }) => {
    const { id } =useParams()
  return (
    <main>
        <ul className='Cards-Container'>
            <Card
            key={characters[id-1].id}
            image={characters[id-1].image}
            name={characters[id-1].name}
            gender={characters[id-1].gender}
            id={characters[id-1].id}
            species={characters[id-1].species}
            status={characters[id-1].status}
            location={characters[id-1].location.name}
            origin={characters[id-1].origin.name}
          /> 
        </ul>
    </main>
  );
};

export default DetailedPage