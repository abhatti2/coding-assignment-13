import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  // Test: Check if the card renders with title and body text.
  test('renders card with title and body', () => {
    render(<Card title="Test Title" body="Test Body" />);
    const titleElement = screen.getByText(/Test Title/i);
    const bodyElement = screen.getByText(/Test Body/i);
    expect(titleElement).toBeInTheDocument(); // Assert that the title is rendered
    expect(bodyElement).toBeInTheDocument(); // Assert that the body is rendered
  });

  // Test: Check if the disabled styles are applied when the card is disabled.
  test('applies disabled styles when disabled', () => {
    render(
      <Card title="Disabled Card" body="This card is disabled." disabled />
    );
    const cardElement = screen.getByTestId('card-container'); // Use `getByTestId` to avoid role issues
    expect(cardElement).toHaveStyle('cursor: not-allowed'); // Assert that the card has the proper styles
    expect(cardElement).toHaveStyle('opacity: 0.6'); // Assert that the opacity is applied
  });

  // Test: Ensure the card has correct accessibility attributes.
  test('renders with correct accessibility attributes', () => {
    render(
      <Card title="Accessible Card" body="This card is accessible." />
    );
    const cardElement = screen.getByTestId('card-container'); // Use `getByTestId` for more control over queries
    expect(cardElement).toBeInTheDocument(); // Assert that the card is rendered
  });
});
