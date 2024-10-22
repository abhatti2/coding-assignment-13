import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
`;

interface TableHeaderProps {
  children: React.ReactNode; // Ensure the TableHeader component accepts children
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;
