import { Link } from "react-router-dom"
import styled from 'styled-components';
import { useState } from 'react';
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
  isactive,
  id,
  gender,
  status,
  species,
  origin,
  location,
}) => {
  const [cardIsInDetailsMode, setCardIsInDetailsMode] = useState(false);
  const buttontext = 'Show more';

  const handleDetails = () => {
    setCardIsInDetailsMode(previousState => !previousState);
  };

  return (
    <>
      {cardIsInDetailsMode ? (
        <CardLi>
          <img src={image} alt="Profile picture" />
          <h2>{name}</h2>
          <p>I'm active</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <Button onClick={handleDetails}>Show less</Button>
        </CardLi>
      ) : (
        <CardLi>
          <img src={image} alt="Profile picture" />
          <h2>{name}</h2>
          <p>I'm not active</p>
          <Link to="/details" onClick={handleDetails} isactive={isactive}>
            Show more
          </Link>
        </CardLi>
      )}
    </>
  );
};

export default Card;
