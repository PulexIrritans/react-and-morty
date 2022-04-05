import styled from 'styled-components'

const CardLi = styled.li`
background-color: pink;
border-radius: 5px;
max-width: 300px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 5);
`

const Card = ({ image, name }) => {
  
    return (
        <CardLi>
           <img src={image} alt="Profile picture" />
           <p>{name}</p>
        </CardLi>
    )
}

export default Card