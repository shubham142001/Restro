import React from 'react';
import Popular1 from '../assets/Pop1.jpg';
import Popular2 from '../assets/Pop2.jpg';
import Popular3 from '../assets/Pop3.jpg';
import Popular4 from '../assets/Pop4.jpg';
import Popular5 from '../assets/pop5.jpg';
import Popular6 from '../assets/pop6.jpg';

import { IoStarSharp } from 'react-icons/io5';

const data = [{
  id: 1,
  image: Popular1,
  name: 'Burgers',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: [<IoStarSharp />]
},
{
  id: 2,
  image: Popular2,
  name: 'Pizzas',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: []
},
{
  id: 3,
  image: Popular3,
  name: 'Sandwitch',
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
  name: 'Biryani',
  stars1: [<IoStarSharp />, <IoStarSharp />, <IoStarSharp />, <IoStarSharp />],
  stars2: <IoStarSharp />
},]

function Popular() {
  return (
    <>
      <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 px-0 select-none sm:pl-4 flex flex-shrink-0 overflow-scroll gap-10 scrollbar-none'>
        {data.map((data) => (
          <div key={data.id} className="xl:h-[400px] xl:w-[350px] md:h-[370px] md:w-[300px] bg-gray-100 border-8 rounded-2xl shadow-lg m-auto mb-20 sm:h-[320px] sm:w-[250px] h-[390px] w-[330px] flex-shrink-0 ml-10  sm:ml-0 ">
            <div className="xl:h-[150px] xl:w-[300px] lg:h-[130px] lg:w-[250px] md:h-[150px] md:w-[300px] sm:h-[150px] sm:w-[300px] pt-4 flex m-auto sm:pl-2 pl-5 ">
              <img
                className="xl:h-[200px] xl:w-[300px] lg:h-[180px] lg:w-[250px] md:h-[180px] md:w-[270px] sm:h-[150px] sm:w-[200px] h-[200px] w-[270px]  object-cover rounded-lg overflow-hidden "
                src={data.image}
                alt={data.name}
              />
            </div>

            <div className=" text-center  md:h-[220px] items-center flex flex-col justify-center md:pt-20 gap-2 sm:h-[170px] sm:mt-[-20px] lg:mt-0 mt-2">
              <h1 className="md:text-2xl md:font-semibold sm:font-bold font-semibold text-4xl pb-4 sm:pb-0">{data.name}</h1>
              <div className="flex justify-center text-2xl" >
                <div className='text-yellow-400 flex'>{data.stars1}</div>
                {data.stars2}
              </div>
              <button className="sm:mt-2 py-1 px-4 bg-red-600 text-xl text-white sm:font-semibold rounded-md hover:bg-red-500 sm:pt-2 ">
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
