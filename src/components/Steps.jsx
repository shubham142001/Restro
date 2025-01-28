import React from 'react'
import step1 from '../assets/step1.jpg'
import step2 from '../assets/step2.jpg'
import step3 from '../assets/step3.jpeg'
import step4 from '../assets/step4.png'

function Steps() {

  const data = [
    { id: 1, img:step1 ,desc: 'Choose Your Favourite Food'},
    { id: 2, img:step2 ,desc: 'Free And Fast Delivery'},
    { id: 3, img:step3 ,desc: 'Cash On Delivery ' },
    { id: 4, img:step4 ,desc: 'Enjoy Your Food'},
  ]
  return (
    <>
      <div className='flex sm:justify-evenly items-center sm:pb-10 md:pl-12 lg:pl-0 sm:pl-10 gap-3 px-2'>
        {
          data.map((data) => (
            <div id={data.id} className=' sm:w-[230px] sm:flex flex-col justify-center sm:gap-5 py-2 sm:py-0'>
              <div className='rounded-full lg:h-[200px] lg:w-[200px] sm:h-[130px] sm:w-[130px] md:h-[150px] md:w-[150px] h-[90px] w-[90px] overflow-hidden'><img src={data.img} className='lg:w-[200px] lg:h-[200px] sm:w-[150px] sm:h-[150px] h-[90px] w-[90px]' />
              </div>
              <h1 className='text-xl font-semibold text-black text-center sm:pr-6 sm:block hidden'>{data.desc} </h1>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Steps