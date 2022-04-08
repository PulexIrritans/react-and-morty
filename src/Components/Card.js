import { Link } from 'react-router-dom';
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
  id,
  gender,
  status,
  species,
  origin,
  location,
  detailsMode,
  bookmarking,
  handleBookmarking,
  isbookmarked,
}) => {
  //   const [isActive, setActive] = useState(false);
  const [cardIsInDetailsMode, setCardIsInDetailsMode] = useState(detailsMode);

  return (
    <>
      {cardIsInDetailsMode ? (
        <CardLi>
          <img src={image} alt="Profile picture" />
          <h2>{name}</h2>
          {bookmarking ? (
            <Bookmark
              className={isbookmarked ? 'activebookmark' : ''}
              onClick={() => {
                handleBookmarking(id);
              }}
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
          <img src={image} alt="Profile picture" />
          <h2>{name}</h2>
          {bookmarking ? (
            <Bookmark
              className={isbookmarked ? 'activebookmark' : ''}
              onClick={() => {
                handleBookmarking(id);
              }}
            ></Bookmark>
          ) : (
            ''
          )}
          <Button>
            <Link
              onClick={() => setCardIsInDetailsMode(true)}
              to={`/details/${id}`}
            >
              Show more
            </Link>
          </Button>
        </CardLi>
      )}
    </>
  );
};

export default Card;
