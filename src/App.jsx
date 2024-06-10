import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import './App.css';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const ContactForm = lazy(() => import('./components/ContactForm'));

const App = () => {
  const location = useLocation();

  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={ContactForm} />
              <Route path="/" exact component={About} />
            </Switch>
          </AnimatePresence>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
