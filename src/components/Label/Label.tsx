import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 16px;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => (
  <StyledLabel disabled={disabled}>{text}</StyledLabel>
);

export default Label;
