import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <motion.footer className="w-full bg-white shadow dark:bg-sky-950 mt-12 md:mt-28">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between text-center">
        <span className="text-sm text-primary dark:text-gray-200 sm:text-center">
          © 2023{' '}
          <a href="/" className="hover:underline">
            Jonathan Salendah
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-primary dark:text-gray-200">
          <li>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className="mr-4 hover:underline md:mr-6">
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="mr-4 hover:underline md:mr-6">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
