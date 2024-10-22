import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';
import { act } from 'react';


describe('Dropdown Component', () => {
  test('renders dropdown with options', () => {
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    render(<Dropdown options={options} onChange={() => {}} />);
    const optionElement = screen.getByRole('option', { name: /Option 1/i });
    expect(optionElement).toBeInTheDocument();
  });

  test('triggers onChange when an option is selected', () => {
    const onChangeMock = jest.fn();
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    render(<Dropdown options={options} onChange={onChangeMock} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });
    expect(onChangeMock).toHaveBeenCalledWith('2');
  });

  test('does not allow interaction when disabled', () => {
    const onChangeMock = jest.fn();
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    render(<Dropdown options={options} onChange={onChangeMock} disabled />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
