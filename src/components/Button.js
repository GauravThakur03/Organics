import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;
  border: 0.05rem solid var(--mainWhite);
  border-color:${props=>props.cart?"var(--mainYellow)":"var(--mainWhite)"};
  color: ${props=>props.cart?"var(--mainWhite)":"var(--mainWhite)"};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props=>props.cart?"var(--mainWhite)":"var(--mainWhite)"};
    color: var(--mainGreen);
  }
  &:focus {
    outline: none;
  }
`;
