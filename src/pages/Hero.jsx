import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import HeroImage from '../assets/HeroImage.png';

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
          <a
            download="CV-JonathanSalendah.pdf"
            href="/"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-primary dark:border-white py-2.5 sm:py-3 shadow-lg rounded-lg bg-primary dark:bg-gray-200 dark:hover:bg-white focus:ring-1  focus:ring-sky-950 hover:bg-sky-950 text-gray-300 dark:text-primary hover:text-white duration-200"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium">Download CV</span>
          </a>
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
        <img src={HeroImage} alt="Developer" className="mx-auto" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
