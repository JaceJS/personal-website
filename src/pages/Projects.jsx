import { motion } from 'framer-motion';
import JaceInstrumental from '../assets/JaceInstrumental.jpg';
import PersonalWebsite from '../assets/PersonalWebsite.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';

const Projects = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }} id="projects" className="flex flex-col sm:justify-center items-center sm:flex-row mt-16 md:mt-28">
      <div className="flex flex-col justify-center text-primary dark:text-gray-200 text-center">
        <h1 className="font-semibold text-3xl mb-5 md:mb-10">Projects</h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.1,
          }}
          variants={{
            hidden: { opacity: 0, y: 180 },
            visible: { opacity: 1, y: 0 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10"
        >
          {/* card */}
          <a href="#projects" className="max-w-xs sm:mx-3 mb-5 sm:mb-10 rounded overflow-hidden shadow-lg hover:shadow-xl bg-white dark:bg-gray-200 dark:text-primary hover:scale-105 duration-300 h-[300px] md:h-[450px] relative">
            <img className="w-full" src={PersonalWebsite} alt="Project_Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Personal Website</div>
              <p className="text-md text-start">
                This Personal Website combines the power of React to create a responsive and interactive interface, Tailwind CSS for consistent and flexible design, and Framer Motion to add captivating animations.
              </p>
            </div>
            <div className="absolute inset-0 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-60 hover:opacity-100">
              <p className="font-bold text-xl hover:underline">View More</p>
              <FaArrowRightLong className="text-xl ml-3" />
            </div>
          </a>
          {/* card */}
          <a href="#projects" className="max-w-xs sm:mx-3 mb-5 sm:mb-10 rounded overflow-hidden shadow-lg hover:shadow-xl bg-white dark:bg-gray-200 dark:text-primary hover:scale-105 duration-300 h-[300px] md:h-[450px] relative">
            <img className="w-full" src={JaceInstrumental} alt="Project_Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">JaceInstrumental</div>
              <p className="text-md text-start">
                JaceInstrumental is a music store website built using Laravel and Bootstrap. It consists of a landing page and a dashboard. The landing page features a hero section and product displays that can be managed by the admin and
                staff. The dashboard includes Create, Read, Update, Delete functionality, allowing users to manage the products and other data. The project also implements a multi-role user login system, enabling different levels of access
                and permissions based on user roles.
              </p>
            </div>
            <div className="absolute inset-0 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-60 hover:opacity-100">
              <p className="font-bold text-xl hover:underline">View More</p>
              <FaArrowRightLong className="text-xl ml-3" />
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
