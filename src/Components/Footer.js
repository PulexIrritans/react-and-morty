import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledFooter = styled.div`
background-color: pink;
`;

const FooterUl = styled.ul`
display: flex;
justify-content: space-around;
`;

const FooterLi = styled.li`
padding: 1rem 0;
&:hover {
background-color: deeppink;
}
`;

const Footer = ({}) => {

    return (
        <StyledFooter>
        <FooterUl>
            <FooterLi><Link to="/">Home</Link></FooterLi>
            <FooterLi><Link to="/random">Random</Link></FooterLi>
            <FooterLi><Link to="/favorites">Favorites</Link></FooterLi>
            <FooterLi><Link to="/creative">Get creative</Link></FooterLi>
        </FooterUl>
        </StyledFooter>
    )
}

export default Footer