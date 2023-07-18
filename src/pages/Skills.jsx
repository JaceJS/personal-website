import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPhp, FaLaravel } from 'react-icons/fa6';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const Skills = () => {
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
        hidden: { opacity: 0, y: 180 },
        visible: { opacity: 1, y: 0 },
      }}
      id="skills"
      className="flex flex-col sm:justify-center items-center sm:flex-row mt-16 md:mt-28"
    >
      <div className="text-primary dark:text-gray-200 max-w-screen-md flex flex-col justify-center text-center">
        <h1 className="font-semibold text-3xl mb-5 md:mb-10">Skills</h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 sm:gap-10">
          <div className="flex flex-col items-center font-semibold">
            <FaHtml5 className="text-6xl md:text-8xl" />
            <p className="font-medium">HTML 5</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <FaCss3Alt className="text-6xl md:text-8xl" />
            <p className="font-medium">CSS 3</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <FaBootstrap className="text-6xl md:text-8xl" />
            <p className="font-medium">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <SiTailwindcss className="text-6xl md:text-8xl" />
            <p className="font-medium">TailwindCSS</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <FaJs className="text-6xl md:text-8xl" />
            <p className="font-medium">JavaScript</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <FaReact className="text-6xl md:text-8xl" />
            <p className="font-medium">React</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <SiMysql className="text-6xl md:text-8xl" />
            <p className="font-medium">MySQL</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <FaPhp className="text-6xl md:text-8xl" />
            <p className="font-medium">PHP</p>
          </div>
          <div className="flex flex-col items-center font-semibold">
            <FaLaravel className="text-6xl md:text-8xl" />
            <p className="font-medium">Laravel</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
