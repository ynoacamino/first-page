import './Title.css';
import React from 'react';
import { motion } from 'framer-motion';

function Title({ title }) {
  return (
    <div className="Title">
      {title
        .name
        .toUpperCase()
        .split('')
        .map((lether, index) => (
          <motion.div
            animate={{ y: 50, opacity: 1 }}
            initial={{ y: 350, opacity: 0 }}
            transition={{ delay: index / 3 + 0.5 }}
            key={lether}
            className="boxLether"
          >
            {lether}
          </motion.div>
        ))}
    </div>
  );
}

export default Title;
