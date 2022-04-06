import { Link } from "react-router-dom"
import styled from 'styled-components';
import { Button } from './Button';

const CardLi = styled.li`
  background-color: pink;
  border-radius: 5px;
  max-width: 300px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 5);
  padding-bottom: 1rem;
`;

const Card = ({
  image,
  name,
  id,
  gender,
  status,
  species,
  origin,
  location,
  mode,
  handleDetails
  
}) => {
  
  return (
    <>
      {mode ? (
        <CardLi>
          <img src={image} alt="Profile picture" />
          <h2>{name}</h2>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin}</p>
          <p>Location: {location}</p>
          <Button onClick={handleDetails}>Show less</Button>
        </CardLi>
      ) : (
        <CardLi>
          <img src={image} alt="Profile picture" />
          <h2>{name}</h2>
          <Button>
              <Link onClick={handleDetails} to={`/details/${id}`}>Show more</Link>
          </Button>
        </CardLi>
      )}
    </>
  );
};

export default Card;
