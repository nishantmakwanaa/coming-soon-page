import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 50,
    duration: Math.random() * 10 + 5
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {bubbles.map(({ id, size, duration }) => (
        <motion.div
          key={id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-3xl"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 2 + 1,
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 2 + 1,
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;