import operate from '../logic/operate';

describe('operate', () => {
  test('it sums two numbers', () => {
    const result = operate(2, 4, '+');
    expect(result).toBe('6');
  });
  test('it substract two numbers', () => {
    const result = operate(8, 4, '-');
    expect(result).toBe('4');
  });
  test('it multiplies two numbers', () => {
    const result = operate(2, 4, 'x');
    expect(result).toBe('8');
  });
  test('it divides two numbers', () => {
    const result = operate(8, 4, '÷');
    expect(result).toBe('2');
  });
  test('it return rest from a division of two numbers', () => {
    const result = operate(4, 2, '%');
    expect(result).toBe('0');
  });
});
