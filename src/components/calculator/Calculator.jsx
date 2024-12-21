import React, { useState } from 'react';
import { Display } from './Display';
import { Keypad } from './Keypad';
import { ThemeToggle } from './ThemeToggle';
import { evaluate } from './utils';

export const Calculator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [display, setDisplay] = useState('');
  const [expression, setExpression] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op) => {
    setShouldResetDisplay(true);
    setExpression(display + ' ' + op);
    setDisplay(display);
  };

  const handleEqual = () => {
    try {
      const result = evaluate(expression + ' ' + display);
      setDisplay(result.toString());
      setExpression('');
      setShouldResetDisplay(true);
    } catch (error) {
      setDisplay('Error');
      setShouldResetDisplay(true);
    }
  };

  const handleClear = () => {
    setDisplay('');
    setExpression('');
    setShouldResetDisplay(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900`}>
      <div className="container mx-auto px-4 py-8 max-w-lg"> {/* Increased max-w-md to max-w-lg */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 transition-all duration-300 ease-in-out transform hover:scale-105"> {/* Increased padding from p-8 to p-10 */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">Calculator</h1>
            <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />
          </div>

          <Display value={display} expression={expression} />
          
          <Keypad
            onNumber={handleNumber}
            onOperator={handleOperator}
            onEqual={handleEqual}
            onClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
};