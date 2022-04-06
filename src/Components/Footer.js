import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
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
&[aria-current="page"],
&:hover{
background-color: deeppink;
}
`;

const Footer = ({}) => {
let activeStyle = {
        backgroundColor: "deeppink",
};
    return (
        <StyledFooter>
        <FooterUl>
            <FooterLi><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink></FooterLi>
            <FooterLi><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/random">Random</NavLink></FooterLi>
            <FooterLi><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/favorites">Favorites</NavLink></FooterLi>
            <FooterLi><NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/creative">Get creative</NavLink></FooterLi>
        </FooterUl>
        </StyledFooter>
    )
}

export default Footer