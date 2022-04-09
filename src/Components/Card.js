import styled from 'styled-components';
import { Button } from './Button';
import { Bookmark } from './Bookmark';
import { useState } from 'react';

const CardLi = styled.li`
  background-color: pink;
  border-radius: 5px;
  max-width: 300px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 5);
  padding-bottom: 1rem;
  position: relative;
`;

const Card = ({
  image,
  name,
  gender,
  status,
  species,
  origin,
  location,
  detailsMode,
  bookmarking,
  handleBookmarking,
  isbookmarked,
  onClickCallback
}) => {
  //   const [isActive, setActive] = useState(false);
  const [cardIsInDetailsMode, setCardIsInDetailsMode] = useState(detailsMode);

  return (
    <>
      {cardIsInDetailsMode ? (
        <CardLi>
          <img src={image} alt="Profile" />
          <h2>{name}</h2>
          {bookmarking ? (
            <Bookmark
             isbookmarked={isbookmarked}
              onClick={handleBookmarking}
            ></Bookmark>
          ) : (
            ''
          )}
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin}</p>
          <p>Location: {location}</p>
          <Button onClick={() => setCardIsInDetailsMode(false)}>
            Show less
          </Button>
        </CardLi>
      ) : (
        <CardLi>
          <img src={image} alt="Profile" />
          <h2>{name}</h2>
          {bookmarking ? (
            <Bookmark
              isbookmarked={isbookmarked}
              onClick={handleBookmarking}
            ></Bookmark>
          ) : (
            ''
          )}
            <Button onClick={() => {setCardIsInDetailsMode(true); onClickCallback()}}>
              Show more
            </Button>
        </CardLi>
      )}
    </>
  );
};

export default Card;
