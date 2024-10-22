import React from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Table from './components/Table/Table';
import TableRow from './components/Table/TableRow';
import TableHeader from './components/Table/TableHeader';
import TableCell from './components/Table/TableCell';

function App() {
  return (
    <div>
      <h1>Component Library Demo</h1>

      {/* Use your Button component */}
      <Button label="Click Me" />

      {/* Use your Label component */}
      <Label text="This is a label" />

      {/* Use your Table component */}
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>28</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>34</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
