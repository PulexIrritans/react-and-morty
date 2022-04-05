import styled from 'styled-components'

const CardLi = styled.li`
background-color: pink;
border-radius: 5px;
max-width: 300px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 5);
`
const Card = () => {
  
    return (
        <CardLi>
           <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Profile picture" />
           <p>Morty Smith</p>
        </CardLi>
    )
}

export default Card