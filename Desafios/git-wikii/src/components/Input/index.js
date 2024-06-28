import React from 'react';
import { InputContainer, StyledInput } from './styles';

const Input = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="usuário/repositório"
      />
    </InputContainer>
  );
}

export default Input;
