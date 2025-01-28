import React from 'react'
import Corousel from './Corousel'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";


function Head() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it scrolls into view
    threshold: 0.1,     // Trigger when 10% of the component is visible
  });
  return (
    <>
      <div className='md:h-[400px] flex justify-evenly md:px-[80px] select-none xl:pt-0 lg:py-10 sm:py-2 sm:px-[20px] sm:h-[350px] px-4'>
        <div className='xl:w-[60%] lg:w-[60%]'>
          <div className='xl:w-[800px] xl:p-[50px] lg:w-[500px] lg:pt-5 ' ref={ref}>
            <motion.div className=' sm:pt-[-20px] md:pt-0 pt-2  h-20 md:h-32 ' initial={{ opacity: 0, translateY: 20 }} animate={inView ? { opacity: 1, translateY: 0 } : {}} transition={{ delay: 0.5, duration: 0.9, ease: "easeInOut" }}>
              <h1 className='md:text-8xl sm:text-6xl text-sky-600 py-5 text-5xl '>Find<span className='text-green-600'>Your</span></h1>
            </motion.div>
            <motion.h3 className='md:text-4xl sm:text-4xl text-4xl' initial={{ opacity: 0, translateY: 20 }} animate={inView ? { opacity: 1, translateY: 0 } : {}} transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}>Favourite Food</motion.h3>
            <br />
            <motion.p className='text-slate-700 pb-5 w-[300px]' initial={{ opacity: 0, translateY: 20 }} animate={inView ? { opacity: 1, translateY: 0 } : {}} transition={{ delay: 0.2, duration: 0.2, ease: "easeInOut" }}>Where every flavor tells a story, "For the love of delicious food, "Sensory indulgence unlocked, "Your culinary adventure awaits, and "A taste you'll remember."</motion.p>
            <Link to="/Menu"><motion.button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-blue-500" initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}>
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-row items-center text-lg  font-semibold ">
                Explore &nbsp;<FaArrowRightLong size={20} />
              </span>
            </motion.button></Link>

          </div>
        </div>
        <div>
          <Corousel />
        </div>
      </div>
    </>
  )
}

export default Head