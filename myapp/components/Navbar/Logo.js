'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const Logo = ({ size }) => {
  const logoVariants = {
    hover: {
      scale: 1.3, 
    },
  };

  return (
    <Link href={'/'}>
      <motion.img
        src='/logo.png'
        alt='Your Logo Alt Text'
        style={{ width: size, height: 'auto' }}
        whileHover="hover" 
        variants={logoVariants} 
      />
    </Link>
  );
};

export default Logo;
