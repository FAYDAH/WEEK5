import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Projects</h2>
      <div>
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
      </div>
      <div>
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
      </div>
    </motion.section>
  );
};

export default Projects;
