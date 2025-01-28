import React from 'react'
import Popular1 from '../assets/Pop1.jpg';
import Popular2 from '../assets/Pop2.jpg';
import Popular3 from '../assets/Pop3.jpg';
import Popular4 from '../assets/Pop4.jpg';
import Popular5 from '../assets/pop5.jpg';
import Popular6 from '../assets/pop6.jpg';
import Menu1 from '../assets/menu1.jpg'
import Menu2 from '../assets/menu2.jpg'
import Menu3 from '../assets/menu3.jpg'
import Menu4 from '../assets/menu4.jpeg'
import Menu5 from '../assets/menu5.jpg'
import Menu6 from '../assets/menu6.jpg'
import Menu7 from '../assets/menu7.jpeg'
import Menu8 from '../assets/menu8.jpg'
import Menu9 from '../assets/menu9.jpeg'
import Menu10 from '../assets/menu10.jpg'

function Menu() {
    const data = [
        { id: 1, img: Menu1, },
        { id: 2, img: Menu2, },
        { id: 3, img: Menu3, },
        { id: 4, img: Menu4, },
        { id: 5, img: Menu5, },
        { id: 6, img: Menu6, },
        { id: 7, img: Menu7, },
        { id: 8, img: Menu8, },
        { id: 9, img: Menu9, },
        { id: 10, img: Menu10, },
    ]

    const img = [
        Popular1, Popular2, Popular3, Popular4, Popular5, Popular6,
    ]
    return (
        <>
            <div className='bg-gray-100 py-3 xl:h-[780px] flex gap-3 select-none flex-col sm:flex-row '>
                <div className='lg:w-[10%] md:w-[23%] lg:h-[730px] md:h-[700px] sm:h-[700px] sm:w-[23%] w-full overflow-y-scroll scrollbar-none  flex-col lg:pt-3 mt-1 rounded-2xl overflow-scroll'>
                    <ul className='flex flex-row pl-3 gap-3 overflow-scroll py-4 sm:py-0 scrollbar-none '>
                        {data.map((data) => (
                            <li key={data.id} className='font-sans lg:w-[95%] lg:h-[60px] md:h-[100px] md:w-[80%]  sm:rounded-tr-3xl sm:rounded-bl-3xl border lg:hover:w-[100%] md:hover:w-[90%] sm:hover:w-[100%] transition-all cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-blue-500 borderb-br-xl duration-300 w-28 h-28 flex-shrink-0 rounded-full'>
                                <img src={data.img} alt="" className='lg:h-[60px] sm:w-[100%] md:h-[100px] sm:h-[70px] w-28 h-28'/></li> 
                        ))}
                    </ul>
                </div>
                <div className='sm:bg-white lg:w-[88%] md:w-[90%] sm:w-[90%] xl:h-[730px] lg:h-[750px] md:h-[700px] sm:h-[700px] m-auto rounded-3xl overflow-y-scroll scrollbar-none pt-3 grid xl:grid-cols-4  lg:grid-cols-3 xl:gap-10  lg:gap-12 md:gap-12 sm:gap-12 md:pl-8 pr-12 sm:grid-cols-2 sm:pl-6 grid-cols-2 gap-12 pl-4'>
                    {
                        img.map((img) => (
                            <div className='md:h-[330px] md:w-[250px] sm:h-[300px] sm:w-[220px] rounded-3xl pt-3 flex border sm:bg-gray-100 bg-white  flex-col items-center px-2  m-auto w-[180px] gap-2'>
                                <img src={img} alt="" className='sm:h-[150px] sm:w-[210px] rounded-2xl h-[100px] w-[150px]' />
                                <div className='flex flex-col justify-center items-center text-center sm:pt-2 font-medium text-gray-950 gap-2'>
                                    <h1 className='font-extrabold sm:text-2xl mt-2 sm:mt-0'>Tasty Burger</h1>
                                    <h2 className='sm:block hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
                                    <div className='flex justify-center items-center'>
                                        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-full text-sm px-3 py-2 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700  font-sans sm:h-12 md:h-full h-10 mb-2 sm:mb-0 ">
                                            Order Now
                                        </button>
                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-3 py-2 text-center sm:inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700  font-sans sm:h-12 md:h-full h-10 w-16 hidden">
                                            <svg class="md:w-3.5 md:h-3.5 sm:w-4 sm:h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                            Add to cart
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Menu