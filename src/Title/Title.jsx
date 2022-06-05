import './Title.css';
import React from 'react';
import { motion } from 'framer-motion';

const word = 'ESTORE';

function Title() {
  return (
    <div className="Title">
      {word
        .split('')
        .map((lether, index) => (
          <motion.div
            animate={{ y: -300 }}
            transition={{ delay: index / 3 + 0.5 }}
            className="boxLether"
          >
            {lether}
          </motion.div>
        ))}
    </div>
  );
}

export default Title;
