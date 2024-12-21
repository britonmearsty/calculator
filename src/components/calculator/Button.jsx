import React from 'react';

export const Button = ({ onClick, className = '', children }) => {
  return (
    <button
      onClick={onClick}
      className={`
        h-14 font-medium rounded-lg
        transition-all duration-200
        active:scale-95 active:brightness-90
        hover:brightness-95 dark:hover:brightness-110
        ${className}
      `}
    >
      {children}
    </button>
  );
};