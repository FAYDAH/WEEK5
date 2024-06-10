import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import './App.css';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const ContactForm = lazy(() => import('./components/ContactForm'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/" element={<About />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
