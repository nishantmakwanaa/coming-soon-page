import React from 'react';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-6"
    >
      Something Amazing Is In The Works ! We'Re Crafting Something Special
      And Can't Wait To Share It With You.
    </motion.p>
  );
};

export default Description;