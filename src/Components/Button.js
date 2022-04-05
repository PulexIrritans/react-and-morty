import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.isactive === true ? "pink" : "lavender")};
  color: black;
  padding: 1rem 2rem;
  border: none;
  font-family: inherit;
  font-size: inherit;

  &:active {
    background: ${(props) =>
      props.isactive === true ? "rebeccapurple" : "navy"};
    color: white;
  }
`;

