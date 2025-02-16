import React, { useState, } from 'react';
import speciality from '../assets/speciality.jpg';
import speciality1 from '../assets/speciality1.jpg';
import speciality2 from '../assets/speciality2.jpeg';
import speciality3 from '../assets/speciality3.jpg';
import speciality4 from '../assets/speciality4.jpg';
import speciality5 from '../assets/speciality5.jpeg';
import { GiFullPizza, GiNoodles, GiDumplingBao, GiCupcake, GiChickenLeg} from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";

function Speciality() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = [
    { id: 1, img: speciality, name1: 'TastyPizzas', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga provident iusto ad nisi. Vero quo dolorum ex veniam excepturi?', icons: <GiFullPizza size={80} /> },
    { id: 2, img: speciality1, name1: 'Noodles', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga provident iusto ad nisi. Vero quo dolorum ex veniam excepturi?', icons:<GiNoodles size={80}/>    },
    { id: 3, img: speciality2, name1: 'Momos', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga provident iusto ad nisi. Vero quo dolorum ex veniam excepturi?',icons:<GiDumplingBao size={80}/> },
    { id: 4, img: speciality3, name1: 'Choco Lava Cake', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga provident iusto ad nisi. Vero quo dolorum ex veniam excepturi?',icons:<GiCupcake size={80}/> },
    { id: 5, img: speciality4, name1: 'Cold Coffees', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga provident iusto ad nisi. Vero quo dolorum ex veniam excepturi?',icons: <SiBuymeacoffee size={80}/>},
    { id: 6, img: speciality5, name1: 'Crispy Chicken Wings', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga provident iusto ad nisi. Vero quo dolorum ex veniam excepturi?', icons:<GiChickenLeg size={80}/> },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
    <div className='overflow-x-scroll scrollbar-none'>
    <div className="md:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-10 pb-10 select-none md:gap-6 lg:w-full md:w-full md:p-4 sm:grid-cols-2 flex pl-6 flex-row gap-6">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="relative xl:h-[300px] xl:w-[300px] lg:h-[280px] lg:w-[280px] md:h-[240px] md:w-[240px] sm:h-[200px] sm:w-[200px] w-[150px] h-[150px] rounded-2xl overflow-hidden cursor-pointer md:mx-auto flex-shrink-0 "
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item.img}
            alt="Speciality"
            className="absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500"
            style={{
              opacity: hoveredIndex === index ? 0.3 : 1,
            }}
          />
          {hoveredIndex === index && (
            <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-75 flex flex-col justify-center items-center text-white">
              <div  className="text-yellow-300 mb-4"> {item.icons }</div>
              <h1 className="md:text-2xl sm:text-lg font-semibold  bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                {item.name1}
              </h1>
              <p className="text-center px-4 sm:text-xs md:text-xl">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
    
    </>
    
  );
}

export default Speciality;
