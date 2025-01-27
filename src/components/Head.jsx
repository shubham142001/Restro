import React from 'react'
import Corousel from './Corousel'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Head() {
  return (
    <>
      <div className='md:h-[400px] flex justify-evenly md:px-[80px] select-none xl:pt-0 lg:py-10 sm:py-2 sm:px-[20px] sm:h-[350px] '>
        <div className='xl:w-[60%] lg:w-[60%]'>
          <div className='xl:w-[800px] xl:p-[50px] lg:w-[500px] lg:pt-5 '>
            <div className=' sm:pt-[-20px]'>
              <h1 className='md:text-8xl sm:text-6xl text-sky-600 py-5'>Find<span className='text-green-600'>Your</span></h1>
            </div>
            <h3 className='md:text-4xl sm:text-4xl'>Favourite Food</h3>
            <br />
            <p className='text-slate-700 pb-5'>Where every flavor tells a story, "For the love of delicious food, "Sensory indulgence unlocked, "Your culinary adventure awaits, and "A taste you'll remember."</p>
            <Link to="/Menu"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-blue-500">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-row items-center text-lg  font-semibold ">
                Explore &nbsp;<FaArrowRightLong size={20} />
              </span>
            </button></Link>


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