import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';
import { act } from 'react';

describe('RadioButton Component', () => {
  test('renders radio button with label', () => {
    render(
      <RadioButton
        label="Test Radio"
        value="test"
        name="group1"
        checked={false}
        onChange={() => {}}
      />
    );
    const labelElement = screen.getByLabelText(/Test Radio/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('triggers onChange when selected', () => {
    const onChangeMock = jest.fn();
    render(
      <RadioButton
        label="Test Radio"
        value="test"
        name="group1"
        checked={false}
        onChange={onChangeMock}
      />
    );
    const radioButton = screen.getByLabelText(/Test Radio/i);
    fireEvent.click(radioButton);
    expect(onChangeMock).toHaveBeenCalledWith('test');
  });

  test('does not allow interaction when disabled', () => {
    const onChangeMock = jest.fn();
    render(
      <RadioButton
        label="Disabled Radio"
        value="disabled"
        name="group1"
        checked={false}
        onChange={onChangeMock}
        disabled
      />
    );
    const radioButton = screen.getByLabelText(/Disabled Radio/i);

    // Assert that the radio button is disabled before attempting to click
    expect(radioButton).toBeDisabled();

    // Simulate a click on the radio button
    fireEvent.click(radioButton);

    // The onChange event should not be triggered
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
