import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  // Test: Check if the button renders with the correct label.
  test('renders the button component', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument(); // Asserts that the button is rendered with the correct label.
  });

  // Test: Ensure onClick event handler is triggered when button is clicked.
  test('fires onClick event when clicked', () => {
    const onClickMock = jest.fn(); // Mock function to test if it's called
    render(<Button label="Click Me" onClick={onClickMock} />);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement); // Simulate click event
    expect(onClickMock).toHaveBeenCalled(); // Assert that the onClick handler was called
  });

  // Test: Verify disabled button doesn't trigger onClick and has correct disabled state.
  test('applies disabled styles and does not trigger onClick when disabled', () => {
    const onClickMock = jest.fn(); // Mock function
    render(<Button label="Disabled Button" onClick={onClickMock} disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toBeDisabled(); // Assert that the button is disabled
    fireEvent.click(buttonElement); // Simulate click event
    expect(onClickMock).not.toHaveBeenCalled(); // Assert that onClick wasn't called
  });
});
