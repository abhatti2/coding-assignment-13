import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007BFF')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  onClick,
}) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;
