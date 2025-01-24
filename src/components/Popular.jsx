import React from 'react';
import Popular1 from '../assets/Pop1.jpg';
import Popular2 from '../assets/Pop2.jpg';
import Popular3 from '../assets/Pop3.jpg';
import Popular4 from '../assets/Pop4.jpg';
import Popular5 from '../assets/Pop5.jpg';
import Popular6 from '../assets/Pop6.jpg';

import { IoStarSharp } from 'react-icons/io5';

const data = [{
  id: 1,
  image: Popular1,
  name: 'Delicious Burger',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: [<IoStarSharp />]
},
{
  id: 2,
  image: Popular2,
  name: 'Delicious Pizza',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: []
},
{
  id: 3,
  image: Popular3,
  name: 'Delicious Sandwitch',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: [<IoStarSharp />, <IoStarSharp />]
},
{
  id: 4,
  image: Popular4,
  name: 'Steamed Momos',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: [<IoStarSharp />]
},
{
  id: 5,
  image: Popular5,
  name: 'Cold Coffee',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: [<IoStarSharp />, <IoStarSharp />]
},
{
  id: 6,
  image: Popular6,
  name: 'Delicious Biryani',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: <IoStarSharp />
},]

function Popular() {
  return (
    <>
      <div className='grid grid-cols-3 px-0 select-none'>
        {data.map((data) => (
          <div key={data.id} className="h-[400px] w-[350px] bg-gray-100 border-8 rounded-2xl shadow-lg m-auto mb-20 ">
            <div className="h-[150px] w-[300px] pt-4 flex m-auto">
              <img
                className="h-[200px] w-[300px] object-cover rounded-lg overflow-hidden "
                src={data.image}
                alt={data.name}
              />
            </div>

            <div className=" text-center  h-[220px] items-center flex flex-col justify-center pt-20 gap-2">
              <h1 className="text-2xl font-semibold">{data.name}</h1>
              <div className="flex justify-center text-2xl" >
                <div className='text-yellow-400 flex'>{data.stars1}</div>
                {data.stars2}
              </div>
              <button className="mt-2 py-1 px-4 bg-red-600 text-xl text-white font-semibold rounded-md hover:bg-red-500 pt-2">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Popular;
