import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './components/BackgroundAnimation';
import SocialLinks from './components/SocialLinks';
import Title from './components/Title';
import Description from './components/Description';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <BackgroundAnimation />

      <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center"
        >
          <Title />
          <Description />
          <SocialLinks
            githubUrl="https://github.com/nishantmakwanaa"
            portfolioUrl="https://nishantworldwide.in"
            linktreeUrl="https://linktr.ee/nishantmakwana"
          />
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}

export default App;