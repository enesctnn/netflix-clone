import React from 'react';

const Button: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  return (
    <button
      className={`px-4 py-1 bg-red-600 rounded-md text-white hover:bg-red-700 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
