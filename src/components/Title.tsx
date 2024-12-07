import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <motion.h1
      className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      Coming Soon...
    </motion.h1>
  );
};

export default Title;