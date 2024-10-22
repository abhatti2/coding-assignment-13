import React from 'react';
import styled from 'styled-components';

const StyledTableFooter = styled.tfoot`
  background-color: #007bff;
  color: white;
  text-align: center;
`;

interface TableFooterProps {
  children: React.ReactNode; // Ensure the TableFooter component accepts children
}

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
