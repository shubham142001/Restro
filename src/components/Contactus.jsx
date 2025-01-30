import React from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

function Contactus() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it scrolls into view
    threshold: 0.1,     // Trigger when 10% of the component is visible
  });
  return (
    <div>
      <section className="bg-white select-none" ref={ref}>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md lg:h-[800px] sm:py-16 md:px-6">
          <motion.h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
            initial={{ opacity: 0, translateY: 20 }} 
            animate={inView ? { opacity: 1, translateY: 0 } : {}} 
            transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}>
            Contact Us
          </motion.h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a issue ? Want to send feedback about our Restaurant and Dishes ? Need details about our Restaurant ? Let us know.
          </p>
          <form action="#" className="space-y-6">
            <div>
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 lg:ml-0 md:ml-20"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 lg:w-full md:w-[600px] m-auto"
                placeholder="xyz@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 lg:ml-0 md:ml-20"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 lg:w-full md:w-[600px] m-auto"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 lg:ml-0 md:ml-20 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 lg:w-full md:w-[600px] m-auto"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-sky-500 lg:ml-0 md:ml-16"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Contactus