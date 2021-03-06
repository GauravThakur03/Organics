import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: ${props=>props.cart?"var(--mainGreen)":"transparent"};;
  border: 0.05rem solid var(--mainWhite);
  border-color:${props=>props.cart?"var(--mainGreen)":"var(--mainWhite)"};
  color: ${props=>props.cart?"var(--mainWhite)":"var(--mainWhite)"};
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props=>props.cart?"var(--mainGreen)":"var(--mainWhite)"};
    color: ${props=>props.cart?"var(--mainWhite)":"var(--mainGreen)"};
  }
  &:focus {
    outline: none;
  }
`;
