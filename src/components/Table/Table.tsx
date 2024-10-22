import React from 'react';
import { TableProps } from './Table.types';
import styled from 'styled-components';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; // Disable interactions
`;

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return (
    <StyledTable data-testid="table-component" disabled={disabled}>
      {children}
    </StyledTable>
  );
};

export default Table;
