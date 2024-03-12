import React from 'react';
import { motion } from 'framer-motion';

const XIcon = () => {
  return (
    <div style={{ width: 30, height: 100 }}>
      <motion.svg
        whileHover={{
          scale: 1.1,
          fill: 'var(--secondary-color)',
          transition: { duration: 0.3 },
          stroke: 'var(--primary-color)',
        }}
        whileTap={{ scale: 0.5 }}
        width="60"
        height="60"
        viewBox="0 0 100 100"
        fill="var(--primary-color)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="35"
          strokeWidth="7"
          whileHover={{ stroke: 'var(--primary-color)' }}
        />
        <motion.path
          d="M38.5 38.5L61.5 61.5M38.5 61.5L61.5 38.5"
          stroke="var(--secondary-color-light)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          whileTap={{ scale: 0.9 }}
        />
      </motion.svg>
    </div>
  );
};

export default XIcon;
