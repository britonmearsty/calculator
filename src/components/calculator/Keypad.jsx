import React from 'react';
import { Button } from './Button';

export const Keypad = ({ onNumber, onOperator, onEqual, onClear }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button
        onClick={onClear}
        className="bg-red-500 text-white col-span-2 dark:bg-red-600"
      >
        Clear
      </Button>
      <Button
        onClick={() => onOperator('/')}
        className="bg-indigo-500 text-white dark:bg-indigo-600"
      >
        ÷
      </Button>
      <Button
        onClick={() => onOperator('*')}
        className="bg-indigo-500 text-white dark:bg-indigo-600"
      >
        ×
      </Button>

      {[7, 8, 9].map((num) => (
        <Button
          key={num}
          onClick={() => onNumber(num.toString())}
          className="bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={() => onOperator('-')}
        className="bg-indigo-500 text-white dark:bg-indigo-600"
      >
        −
      </Button>

      {[4, 5, 6].map((num) => (
        <Button
          key={num}
          onClick={() => onNumber(num.toString())}
          className="bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={() => onOperator('+')}
        className="bg-indigo-500 text-white dark:bg-indigo-600"
      >
        +
      </Button>

      {[1, 2, 3].map((num) => (
        <Button
          key={num}
          onClick={() => onNumber(num.toString())}
          className="bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={onEqual}
        className="bg-green-500 text-white row-span-2 dark:bg-green-600"
      >
        =
      </Button>

      <Button
        onClick={() => onNumber('0')}
        className="bg-gray-200 col-span-2 dark:bg-gray-700 dark:text-white"
      >
        0
      </Button>
      <Button
        onClick={() => onNumber('.')}
        className="bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        .
      </Button>
    </div>
  );
};