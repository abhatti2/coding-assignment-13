import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';
import { act } from 'react';

describe('HeroImage Component', () => {
  test('applies disabled styles when disabled', () => {
    render(
      <HeroImage
        backgroundImage="https://via.placeholder.com/800x300"
        text="Hero Image is Disabled"
        disabled
      />
    );
    const heroElement = screen.getByRole('region', { name: /Hero Image is Disabled/i });
    expect(heroElement).toHaveStyle('filter: grayscale(100%)');
    expect(heroElement).toHaveStyle('opacity: 0.6');
    expect(heroElement).toHaveStyle('pointer-events: none');
  });

  test('renders with correct accessibility role', () => {
    render(
      <HeroImage
        backgroundImage="https://via.placeholder.com/800x300"
        text="Hero Image Accessible"
      />
    );
    const heroElement = screen.getByRole('region', { name: /Hero Image Accessible/i });
    expect(heroElement).toBeInTheDocument();
  });
});
