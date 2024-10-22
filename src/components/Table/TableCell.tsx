import React from 'react';
import styled from 'styled-components';

const StyledTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

interface TableCellProps {
  children: React.ReactNode;
  colSpan?: number; // Add colSpan as an optional prop
}

const TableCell: React.FC<TableCellProps> = ({ children, colSpan }) => {
  return <StyledTableCell colSpan={colSpan}>{children}</StyledTableCell>;
};

export default TableCell;
