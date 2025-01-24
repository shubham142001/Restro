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
      <div className='flex justify-evenly items-center pb-10'>
        {
          data.map((data) => (
            <div id={data.id} className=' w-[230px] flex flex-col justify-center gap-5'>
              <div className='rounded-full h-[200px] w-[200px] bg-red-900 overflow-hidden'><img src={data.img} className='w-[200px] h-[200px]' />
              </div>
              <h1 className='text-xl font-semibold text-black text-center pr-6'>{data.desc} </h1>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Steps