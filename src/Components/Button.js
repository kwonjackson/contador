import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

export const Button = styled.button`
  background-color: #ff00ff;
  color: #000000;
  font-size: 4rem;
  padding: 2rem 2rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 20px #ff00ff;
  margin: 0 3rem;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    color: #ff00ff;
  }
`;
