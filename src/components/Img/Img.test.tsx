import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';
import { act } from 'react';


describe('Img Component', () => {
  test('renders the image component with alt text', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toBeInTheDocument();
  });

  test('applies correct src to the image', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  test('renders with appropriate role and attributes', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Accessible Image" />);
    const imgElement = screen.getByRole('img', { name: /Accessible Image/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('alt', 'Accessible Image');
  });
});
