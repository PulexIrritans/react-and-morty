import styled from 'styled-components'

export const Bookmark = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.isbookmarked ? 'black' : 'rgba(15,15,13,0.3)'};
  border-radius: 50%;
  border: 3px solid black;
  position: absolute;
  top: -10px;
  right: -10px;
  &:hover {
      cursor: pointer;
  }
 
  
`;
