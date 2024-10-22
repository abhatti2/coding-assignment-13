import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input<{ disabled?: boolean }>`
  margin-right: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 16px;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
  disabled = false,
}) => {
  const inputId = `${name}-${value}`;

  return (
    <div>
      <StyledRadioButton
        id={inputId}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={(e) => {
          if (!disabled) { // Ensure that onChange is not fired when disabled
            onChange(e.target.value);
          }
        }}
        disabled={disabled}
      />
      <StyledLabel htmlFor={inputId} disabled={disabled}>
        {label}
      </StyledLabel>
    </div>
  );
};

export default RadioButton;
