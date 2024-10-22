import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  border: 1px solid ${({ disabled }) => (disabled ? '#ccc' : '#007BFF')};
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  disabled = false,
}) => (
  <StyledSelect
    disabled={disabled}
    onChange={(e) => !disabled && onChange(e.target.value)} // Ensure onChange doesn't fire when disabled
    role="combobox"
    aria-disabled={disabled}
  >
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
