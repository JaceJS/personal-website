import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showAnimation && (
          <motion.div className="window-background" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
            <motion.div className="app-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h1>Welcome to My Portfolio</h1>
            </motion.div>
          </motion.div>
        )}
        ;
      </AnimatePresence>
      <div className="bg-gray-200 dark:bg-primary transition duration-300">
        <Router>
          <NavBar />
          <div className="container mx-auto px-3 sm:px-0">
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
