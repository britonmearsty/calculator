export const evaluate = (expression) => {
  const parts = expression.trim().split(' ');
  if (parts.length !== 3) {
    throw new Error('Invalid expression');
  }

  const [num1, operator, num2] = parts;
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers');
  }

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    default:
      throw new Error('Invalid operator');
  }
};