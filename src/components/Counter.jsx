import React, { useState } from 'react'
import CountUp from 'react-countup';
import counter from '../assets/counter.jpg'
import ScrollTrigger from 'react-scroll-trigger';

function Counter() {
    const [count, setCount] = useState(false);
    const data = [
        { id: 1, name: 'Restaurants', count: 20 },
        { id: 2, name: 'Dishes', count: 350 },
        { id: 3, name: 'Experiences', count: 21 },
        { id: 4, name: 'New Chef', count: 8 },
    ]
    return (
        <>
            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <div className='w-[95%] h-[300px] m-auto grid justify-center items-center'>
                    <h1 className=' h-12 text-5xl text-center text-blue-800'>Lets Number<span className='text-green-600'> to Speak</span></h1>
                    <div className='flex xl:gap-36 flex-wrap justify-center lg:gap-28'>
                        {
                            data.map((data) => (
                                <div key={data.id} className=' grid justify-center items-center h-[100px]'>
                                    <div className='flex justify-center'>
                                        {count && (<CountUp
                                            start={0}
                                            end={data.count}
                                            duration={5}
                                            separator=","
                                            prefix=""
                                            className='text-4xl  font-bold'
                                        />)}

                                    </div>
                                    <h2 className='text-4xl  font-bold h-[100px] '>{data.name}</h2>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </ScrollTrigger>

        </>
    )
}

export default Counter