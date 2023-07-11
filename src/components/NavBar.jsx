import { useState } from 'react';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.9,
        delay: 0.2,
      }}
      id="nav"
      className="z-10 sticky top-0 bg-gray-200 dark:bg-primary sm:shadow-sm sm:bg-opacity-90 dark:sm:bg-opacity-90"
    >
      <nav className="max-w-screen-lg xl:max-w-screen-xl block sm:container sm:mx-auto sm:flex sm:justify-between sm:items-center py-2 sm:py-0">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div className={activeTheme === 'dark' ? 'text-primary' : 'text-white'}>
            <a href="/" className="text-lg md:text-2xl font-bold cursor-pointer">
              Jonathan Salendah
            </a>
          </div>

          {/* Theme switcher small screen */}
          <div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher" className="block sm:hidden ml-0 bg-primary hover:bg-sky-950 dark:bg-gray-200 p-3 dark:hover:bg-white shadow-md rounded-xl cursor-pointer">
            {activeTheme === 'dark' ? <FiMoon className="text-white text-xl" /> : <FiSun className="text-primary text-xl" />}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} type="button" className="focus:outline-none" aria-label="Hamburger Menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-current text-secondary-dark dark:text-white">
                {showMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div className={showMenu ? 'block mx-auto p-3 shadow-lg' : 'hidden'}>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="block text-center text-lg text-primary dark:text-gray-200 hover:text-sky-950 hover:underline mb-3" aria-label="About">
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="block text-center text-lg text-primary dark:text-gray-200 hover:text-sky-950 hover:underline mb-3" aria-label="About">
            About
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className="block text-center text-lg text-primary dark:text-gray-200 hover:text-sky-950 hover:underline mb-3" aria-label="Skills">
            Skills
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="block text-center text-lg text-primary dark:text-gray-200 hover:text-sky-950 hover:underline mb-3" aria-label="Projects">
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="block text-center text-lg text-primary dark:text-gray-200 hover:text-sky-950 hover:underline mb-3" aria-label="Contact">
            Contact
          </Link>
        </div>

        {/* Header links large screen */}
        <div className="font-semibold hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block text-left text-lg text-primary hover:text-sky-950 hover:scale-105 dark:text-gray-200 dark:hover:text-white sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Projects"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block text-left text-lg text-primary hover:text-sky-950 hover:scale-105 dark:text-gray-200 dark:hover:text-white sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Projects"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block text-left text-lg text-primary hover:text-sky-950 hover:scale-105 dark:text-gray-200 dark:hover:text-white sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="About"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block text-left text-lg text-primary hover:text-sky-950 hover:scale-105 dark:text-gray-200 dark:hover:text-white sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="About"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block text-left text-lg text-primary hover:text-sky-950 hover:scale-105 dark:text-gray-200 dark:hover:text-white sm:mx-4 mb-2 sm:py-2 cursor-pointer"
            aria-label="Contact"
          >
            Contact
          </Link>

          {/* Theme switcher large screen */}
          <div className="sm:mx-4 mb-2 sm:py-2">
            <div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher" className="bg-primary hover:bg-sky-950 dark:bg-gray-200 p-3 dark:hover:bg-white shadow-md rounded-xl cursor-pointer duration-700">
              {activeTheme === 'dark' ? <FiMoon className="text-white text-xl" /> : <FiSun className="text-primary text-xl" />}
            </div>
          </div>
        </div>
      </nav>
    </motion.nav>
  );
};

export default NavBar;
