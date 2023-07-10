import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // <AnimatePresence>
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
    // </AnimatePresence>
  );
}

export default App;
