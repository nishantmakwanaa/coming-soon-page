import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-4 sm:bottom-6 lg:bottom-8 text-xs sm:text-sm text-gray-400"
    >
      © {new Date().getFullYear()} Nishant Makwana. All rights reserved.
    </motion.div>
  );
};

export default Footer;