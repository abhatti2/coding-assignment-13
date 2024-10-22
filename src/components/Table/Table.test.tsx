import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';
import { act } from 'react';


describe('Table Component', () => {
  test('renders the table component', () => {
    // Removed `act()` wrapping
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>Test Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const cellElement = screen.getByText(/Test Cell/i);
    expect(cellElement).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <TableRow>
            <TableCell>Disabled Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const tableElement = screen.getByTestId('table-component');
    expect(tableElement).toHaveStyle('opacity: 0.5');
    expect(tableElement).toHaveStyle('pointer-events: none');
  });
});
