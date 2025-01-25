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
      <div className='select-none xl:h-[450px] lg:h-[850px] w-[95%] m-auto rounded-2xl my-10 shadow-2xl flex justify-center items-center flex-col'>
        <div className=' w-[95%] xl:h-[360px] lg:h-[700px] overflow-hidden p-3 flex '>
          <div className=' h-16 w-[100%] flex justify-between px-16 items-center border-b-2 border-gray-500'>
            <div className='flex justify-center items-center gap-8'>
            <img src={Image} alt="" className='h-14 w-14 rounded-full' />
            <h1 className='text-2xl font-semibold text-gray-900'>Pulav Rice</h1>
            </div>
            <div className='flex justify-between items-center gap-24'>
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
        <div className=' h-[50px] w-[95%] border-t-2 border-red-500 flex gap-4 justify-end text-3xl items-center pt-4 font-semibold pr-44' >
          <h1 className='text-4xl font-bold'>Total:</h1>
          <h1>200</h1>
        </div>
      </div>
    </>
  )
}

export default Cart