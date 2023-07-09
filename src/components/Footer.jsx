import { motion } from 'framer-motion';

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
            <a href="#hero" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#hero" className="mr-4 hover:underline md:mr-6">
              Skills
            </a>
          </li>
          <li>
            <a href="#hero" className="mr-4 hover:underline md:mr-6">
              Projects
            </a>
          </li>
          <li>
            <a href="#hero" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
