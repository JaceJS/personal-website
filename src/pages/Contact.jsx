import { motion } from 'framer-motion';

const Contact = () => {
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
        hidden: { opacity: 0, y: -180 },
        visible: { opacity: 1, y: 0 },
      }}
      id="contact"
      className="flex flex-col sm:justify-center items-center sm:flex-row mt-16 md:mt-28"
    >
      <div className="mx-auto max-w-screen-md text-primary dark:text-gray-200">
        <h1 className="font-semibold text-center text-3xl mb-5 md:mb-10">Contact</h1>
        <p className="mb-8 lg:mb-12 text-center sm:text-xl">Do you require any assistance? Get in touch with me for collaboration and partnership opportunities.</p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-sky-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primawhite dark:shadow-sm-light"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-white dark:bg-sky-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primawhite dark:shadow-sm-light"
              placeholder="What's on your mind?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-white dark:bg-sky-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primawhite"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-200 hover:text-white dark:text-primary dark:hover:text-sky-950 rounded-lg bg-primary dark:bg-gray-200 hover:bg-sky-950 dark:hover:bg-white focus:ring-4 focus:outline-none focus:ring-sky-950 dark:focus:ring-white"
          >
            Send message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
