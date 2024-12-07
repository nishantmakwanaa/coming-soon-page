import React from 'react';
import { Github, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  githubUrl: string;
  portfolioUrl: string;
  linktreeUrl: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ githubUrl, portfolioUrl, linktreeUrl }) => {
  const linkVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const socialLinks = [
    { href: githubUrl, icon: Github, label: "GitHub" },
    { href: portfolioUrl, icon: Globe, label: "Portfolio" },
    { href: linktreeUrl, icon: ExternalLink, label: "My Social Handle'S" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variants={linkVariants}
          whileHover="hover"
          className="p-2 sm:p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors group"
          aria-label={label}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-300 transition-colors" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;