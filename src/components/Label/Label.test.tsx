import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';
import { act } from 'react';


describe('Label Component', () => {
  test('renders the label component', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText(/Disabled Label/i);
    expect(labelElement).toHaveStyle('color: #999');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
  });
});
