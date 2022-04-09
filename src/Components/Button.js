import styled from "styled-components";

export const Button = styled.button`
  color: black;
  padding: 1rem 2rem;
  border: none;
  font-family: inherit;
  font-size: inherit;
  align-self: center;

  &:active {
    background: ${(props) =>
      props.isactive === true ? "rebeccapurple" : "navy"};
    color: white;
  }
`;

