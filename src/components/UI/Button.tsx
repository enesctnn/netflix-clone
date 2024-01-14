import React from 'react';
import { motion } from 'framer-motion';

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isRed?: boolean;
}> = (props) => {
  return (
    <motion.button
      whileHover={{ backgroundColor: props.isRed ? 'rgb(178, 7, 16)' : '' }}
      className={`px-4 py-1 ${
        props.isRed ? 'bg-red-netflix-light' : ''
      } rounded-md text-white  ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
