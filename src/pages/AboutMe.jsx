import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

const AboutMe = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.9,
        delay: 0.1,
      }}
      variants={{
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
      }}
      id="about"
      className="flex flex-col sm:justify-center items-center sm:flex-row mt-16 md:mt-28"
    >
      <div className="container max-w-screen-md flex flex-wrap justify-center text-center">
        <h1 className="font-semibold text-primary dark:text-gray-200 text-3xl mb-5 md:mb-10">About</h1>
        <p className="font-medium text-primary dark:text-gray-200 md:text-xl mb-4 md:mb-5">
          Passionate and results-driven Web Developer with a strong educational background in Computer Science and hands-on experience in full stack web development. Through my coursework and practical projects, I have gained a solid
          foundation in various programming languages and web technologies. I am constantly seeking new challenges and opportunities to further refine my skills and stay up-to-date with the latest trends in web development.
        </p>
        <div>
          <p className="font-bold text-primary dark:text-gray-200 md:text-xl mb-3 md:mb-5">Let's Connect</p>
          <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-primary dark:text-gray-200 mb-3">
            <li>
              <a href="https://www.linkedin.com/in/jonathansalendah/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                <FaLinkedin className="mx-2 sm:mx-4 hover:text-sky-950 hover:dark:text-white hover:scale-105" />
              </a>
            </li>
            <li>
              <a href="https://github.com/JaceJS" target="_blank" rel="noopener noreferrer" className="text-4xl">
                <FaGithub className="mx-2 sm:mx-4 hover:text-sky-950 hover:dark:text-white hover:scale-105" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jnathns/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                <FaInstagram className="mx-2 sm:mx-4 hover:text-sky-950 hover:dark:text-white hover:scale-105" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
