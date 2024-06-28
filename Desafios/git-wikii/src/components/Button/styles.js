import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #FAFAFA;
  border: 1px solid #FAFAFA;
  border-radius: 20px;
  height: 62px;
  width: 100%; 
  max-width: 300px; 
  margin: 20px auto; 
  color: #333; 
  font-size: 18px; 
  font-weight: bold; 
  text-align: center; 

  &:hover {
    background-color: #FAFAFA40;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  transition: background-color 0.3s ease;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
