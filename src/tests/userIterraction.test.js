import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  let getByTestId; let
    getByText;

  beforeEach(() => {
    const component = render(<Calculator />);
    getByTestId = component.getByTestId;
    getByText = component.getByText;
  });

  it('should return the result of a sum on the screen', () => {
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('='));
    expect(getByTestId('screen').value).toBe('8');
  });

  it('should return the result of a product on the screen', () => {
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('='));
    expect(getByTestId('screen').value).toBe('7');
  });

  it('should return the result of a division on the screen', () => {
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('screen').value).toBe('3');
  });

  it('should return the result of a substracttion on the screen', () => {
    fireEvent.click(getByText('7'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('screen').value).toBe('4');
  });
});
