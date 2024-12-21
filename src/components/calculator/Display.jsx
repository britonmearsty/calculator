import React from 'react';

export const Display = ({ value, expression }) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700 rounded-lg p-6 mb-4 text-right shadow-lg">
      <div className="text-gray-200 dark:text-gray-300 text-sm h-6 mb-1 overflow-hidden">
        {expression || '\u00A0'}
      </div>
      <div className="text-4xl font-extrabold text-white overflow-hidden scrollbar-hide">
        {value || '0'}
      </div>
    </div>
  );
};