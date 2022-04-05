import styled from "styled-components";

const Footer = () => {

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


    return (
        <StyledFooter>
        <FooterUl>
        <FooterLi>Home</FooterLi>
        <FooterLi>Random</FooterLi>
        <FooterLi>Favorites</FooterLi>
        <FooterLi>Be creative</FooterLi>
        </FooterUl>
        </StyledFooter>
    )
}

export default Footer