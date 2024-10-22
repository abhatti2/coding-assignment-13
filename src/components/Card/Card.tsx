import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardBody = styled.p`
  font-size: 16px;
  color: #555;
`;

const Card: React.FC<CardProps> = ({ title, body, disabled = false }) => (
  <StyledCard data-testid="card-container" disabled={disabled}>
    <CardTitle>{title}</CardTitle>
    <CardBody>{body}</CardBody>
  </StyledCard>
);

export default Card;
