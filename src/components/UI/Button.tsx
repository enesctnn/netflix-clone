import React from 'react';
import { motion } from 'framer-motion';

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = (props) => {
  return (
    <motion.button
      whileHover={{ backgroundColor: 'rgb(178, 7, 16)' }}
      className={`px-4 py-1 bg-red-netflix-light rounded-md text-white ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
