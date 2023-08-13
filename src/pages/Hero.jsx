import { motion } from 'framer-motion';
import HeroImage from '../assets/HeroImage.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }} id="hero" className="flex flex-col sm:justify-center items-center sm:flex-row mt-12 md:mt-2">
      <div className="w-full text-left sm:order-2">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          variants={{
            hidden: { opacity: 0, y: -90 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-black dark:text-white uppercase"
        >
          Hi, I'am <br></br>Jonathan Salendah
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          variants={{
            hidden: { opacity: 0, y: -90 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-slate-800 dark:text-gray-300"
        >
          A Junior Web Developer (BNSP Certified)
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3,
          }}
          variants={{
            hidden: { opacity: 0, y: -90 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center sm:block"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-primary dark:border-white py-2.5 sm:py-3 shadow-lg rounded-lg bg-primary dark:bg-gray-200 dark:hover:bg-white focus:ring-1  focus:ring-sky-950 hover:bg-sky-950 text-gray-300 dark:text-primary hover:text-white duration-200"
          >
            <span className="text-sm sm:text-xl font-semibold">Say Hello!</span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: -180 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative w-full mt-8 sm:mt-0 sm:order-1"
      >
        <img src={HeroImage} alt="Developer" className="mx-auto relative z-[1]" />
        <span className="absolute w-[350px] h-[350px] z-[0] top-0 left-1/2 -translate-x-1/2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgb(229 231 235 / var(--tw-bg-opacity))"
              d="M47.9,-57.4C61.9,-45.4,72.9,-30.1,78.6,-11.8C84.4,6.6,84.9,27.9,74.4,39.9C63.8,51.9,42.3,54.5,22.8,60.8C3.3,67,-14.2,77,-28.2,73.6C-42.3,70.2,-52.9,53.5,-60.3,36.7C-67.6,20,-71.6,3.3,-67.7,-10.8C-63.8,-24.8,-52,-36.4,-39.4,-48.6C-26.8,-60.9,-13.4,-73.9,1.8,-76C17,-78.2,33.9,-69.4,47.9,-57.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </span>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
