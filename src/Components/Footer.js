import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledFooter = styled.div`
background-color: pink;
`;

const FooterUl = styled.ul`
display: flex;
justify-content: space-around;

`
const FooterLi = styled.li`
padding: 1rem 0;
&:hover {
background-color: deeppink;
}
`

const Footer = () => {

    return (
        <StyledFooter>
        <FooterUl>
            <FooterLi>Home</FooterLi>
            <FooterLi>Random</FooterLi>
            <FooterLi>Favorites</FooterLi>
            <FooterLi>Get creative</FooterLi>
        {/* <Link to="/">Home</Link>
        <Link to="DetailedPage">Detailed Character</Link>
        <Link to="RandomPage">Random</Link>
        <Link to="FavoritesPage">Favorites</Link> */}
        </FooterUl>
        </StyledFooter>
    )
}

export default Footer