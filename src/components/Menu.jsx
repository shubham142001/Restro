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
            <div className='bg-gray-100 py-3 h-[780px] flex gap-3 select-none'>
                <div className='w-[10%] h-[730px] overflow-y-scroll scrollbar-none  flex-col pt-3 mt-1 rounded-2xl'>
                    <ul className='flex flex-col pl-3 gap-3'>
                        {data.map((data) => (
                            <li key={data.id} className='font-sans w-[95%] h-[60px] text-3xl text-center rounded-tr-3xl rounded-bl-3xl border hover:w-[100%] transition-all cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-blue-500 borderb-br-xl duration-300'>
                                <img src={data.img} alt="" className='h-[60px] w-[100%]'/></li> 
                        ))}
                    </ul>
                </div>
                <div className='bg-white w-[88%] h-[730px] m-auto rounded-3xl overflow-y-scroll scrollbar-none pt-3 grid grid-cols-4 gap-10 pl-8 pr-12'>
                    {
                        img.map((img) => (
                            <div className='h-[330px] w-[250px]  rounded-3xl pt-3 flex border bg-gray-100  flex-col items-center px-2  m-auto '>
                                <img src={Popular1} alt="" className='h-[150px] w-[210px] rounded-2xl ' />
                                <div className='flex flex-col justify-center items-center text-center pt-2 font-medium text-gray-950 gap-2'>
                                    <h1 className='font-extrabold text-2xl '>Tasty Burger</h1>
                                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
                                    <div className='flex justify-center items-center'>
                                        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-full text-sm px-3 py-2 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700  font-sans">
                                            Order Now
                                        </button>
                                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-3 py-2 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700  font-sans">
                                            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
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