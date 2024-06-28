import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 80%;
  margin: 20px;

  @media (max-width: 768px) {
    width: 100%; /* Ajuste para telas menores que 768px */
    max-width: 400px; /* Define uma largura máxima para evitar que o input fique muito largo */
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 62px;
  padding: 0 20px;
  border: 1px solid #FAFAFA;
  border-radius: 20px;
  background: transparent;
  color: #FFFFFF;
  font-size: 20px;
  outline: none; /* Remove a borda ao focar */
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: #8b949e; /* Cor do texto de placeholder */
  }

  &:focus {
    border-color: #58a6ff; /* Cor da borda ao focar */
  }
`;
