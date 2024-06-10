import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>About Me</h2>
      <p>Welcome to my portfolio! My name is Faydah and I am an aspiring web developer...</p>
    </motion.section>
  );
};

export default About;
