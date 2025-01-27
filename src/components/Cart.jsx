import React, { useState } from 'react'
import Image from '../assets/menu6.jpg'
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";


function Cart() {
  const [count, setCount] = useState(0)

    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
      }
    };

  return (
    <>
      <div className='select-none xl:h-[450px] lg:h-[850px] w-[95%] md:h-[650px] m-auto rounded-2xl my-10 shadow-2xl flex justify-between items-center flex-col'>
        <div className=' w-[95%] xl:h-[360px] lg:h-[700px]  md:h-[550px] sm:h-[550px] overflow-hidden p-3 flex'>
          <div className=' h-16 w-[100%] flex justify-between lg:px-16 md:px-8 sm:px-4 items-center border-b-2 border-gray-500 md:gap-36 sm:gap-12 lg:gap-0'>
            <div className='flex justify-center items-center gap-8 '>
            <img src={Image} alt="" className='h-14 w-14 rounded-full' />
            <h1 className='text-2xl font-semibold text-gray-900'>Pulav Rice</h1>
            </div>
            <div className='flex justify-between items-center lg:gap-24 md:gap-12 sm:gap-12'>
            <div className='h-8 w-20 border-slate-400 border rounded-3xl flex justify-evenly items-center cursor-pointer'>
              <RiSubtractLine onClick={decrement} />
              <h1 className='font-mono '>{count}</h1>
              <IoMdAdd onClick={increment} />
            </div>
            <div className='flex justify-center items-center gap-2 '><FaIndianRupeeSign size={20}/>
            <h1 className='text-lg font-semibold pt-1'>200</h1>
            </div>
            <MdDeleteForever className='text-red-600 cursor-pointer' size={25}/>
            </div>
          </div>
        </div>
        <div className=' h-[80px] w-[95%] border-t-2 border-red-500 flex gap-4 justify-end md:text-3xl sm:text-2xl items-center pt-4 md:font-semibold sm:font-bold lg:pr-44 md:pr-24 sm:pr-24' >
          <h1 className='md:text-4xl font-bold sm:text-3xl'>Total:</h1>
          <h1>200</h1>
        </div>
      </div>
    </>
  )
}

export default Cart