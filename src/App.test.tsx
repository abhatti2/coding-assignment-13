import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';


describe('App Component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Component Library Demo/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the Button component', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the Label component', () => {
    render(<App />);
    const labelElement = screen.getByText(/This is a label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('renders the Table component', () => {
    render(<App />);
    const nameCell = screen.getByText(/Name/i);
    const ageCell = screen.getByText(/Age/i);
    const johnDoeCell = screen.getByText(/John Doe/i);
    const janeSmithCell = screen.getByText(/Jane Smith/i);

    expect(nameCell).toBeInTheDocument();
    expect(ageCell).toBeInTheDocument();
    expect(johnDoeCell).toBeInTheDocument();
    expect(janeSmithCell).toBeInTheDocument();
  });
});
