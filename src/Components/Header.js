import styled from 'styled-components'

const StyledHeader = styled.div`
background-color: deeppink;
`;

const HeaderH1 = styled.h1`
color: rgb(46, 45, 45);
padding: 0.5rem 0;
`

const Header = () => {

    return (
        <StyledHeader>
        <HeaderH1 className="Header">
           React and Morty go crazy
        </HeaderH1>
        </StyledHeader>
    )
}

export default Header