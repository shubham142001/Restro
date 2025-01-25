import React, { useState, useRef, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Login from '../assets/login.gif'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [iconSize, setIconSize] = useState(40);
    const [count, setCount] = useState(0);
    const backgroundRef = useRef(null);
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        backgroundRef.current.style.display = "none";
    }, {})

    useEffect(() => {
        if (backgroundRef.current) {
            if (isOpen) {
                backgroundRef.current.style.display = "";
                setTimeout(() => {
                    setCount(0)

                    backgroundRef.current.style.opacity = "1";
                    backgroundRef.current.style.transition = "0.5s ease";
                }, 0);
            } else {
                setCount(450)
                backgroundRef.current.style.opacity = "0";
                backgroundRef.current.style.transition = "0.5s ease";
                setTimeout(() => {
                    setCounter(0)
                    backgroundRef.current.style.display = "none";
                }, 500);
            }
        }
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='sticky top-0 z-10 overflow-hidden bg-white select-none flex-shrink-0 xl:h-20 lg:h-20 md:w-auto lg:pt-2 md:h-24'>
                <div className=' lg:p-0 flex justify-between lg:px-20 md:px-10 items-center md:h-20 lg:h-16 flex-shrink-0 lg:gap-4 md:gap-6 '>
                    <img src={logo} alt="" className='xl:h-18 xl:w-18 md:h-12 md:w-12 ' />
                    <h1 className='text-4xl font-semibold xl:ml-[-30px] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent md:text-2xl md:ml-[-20px]'>Flavourest</h1>
                    <input type="text" placeholder='Search Your Food' className='border xl:h-[50px] xl:w-[500px] rounded-3xl pl-4 outline-none bg-white md:h-[40px] lg:w-[500px] md:w-[220px]'/>      
                    <div className='flex gap-5  justify-center flex-shrink-0'>
                        <Link to="/"><h1 className='text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>Home</h1></Link>
                        <Link to="/Menu"><h1 className='text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>Menu</h1></Link>
                        <Link to="/Contactus1"><h1 className='text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>Contact</h1></Link>
                    </div>
                    <Link to="/CartPage"><div className='text-gray-700 hover:text-green-500 w-10 flex justify-center flex-shrink-0'>
                        <FaShoppingCart size={25} className='hover:cursor-pointer transition-all duration-500 ' />
                    </div></Link>

                    <div className=' hover:cursor-pointer flex-shrink-0 justify-center items-center flex' onMouseEnter={() => setIconSize(50)}
                        onMouseLeave={() => setIconSize(40)}
                    >
                        <div className='flex gap-1 items-center text-gray-700 hover:text-green-500 '>
                            <div onClick={handleOpen} className='flex gap-1'>
                                <div className='' >
                                    <h2 className='text-lg font-bold transition-all duration-700'>Hello</h2>
                                    <p className='font-semi-bold text-md '>Shubham</p>
                                </div >
                                <FaUserCircle size={iconSize}
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black bg-opacity-35 xl:h-[800px] lg:h-full w-full border overflow-hidden mt-[-85px] z-20 fixed select-none' ref={backgroundRef} >
                <div className='bg-white xl:h-full xl:w-[30%] lg:w-[40%] float-right flex flex-col pt-10 transition-all mt-[-10px] overflow-hidden' style={{
                    transform: `translatex(${count}px)`,
                    transition: '0.8s ease'
                }}>
                    <IoMdClose size={30} className='ml-5 cursor-pointer' onClick={handleClose} />
                    <div className="gap-10">
                        <div className='flex ' style={{
                            transform: `translatex(${counter}px)`,
                            transition: '0.8s ease'
                        }}>
                            <div >
                                {/* Login Form */}
                                <form action="" className='flex flex-col gap-6 w-[410px] items-center'>
                                    <h1 className='text-3xl font-semibold mb-3 text-gray-700'>Login</h1>
                                    <h1 className='font-medium text-lg text-red-500 cursor-pointer hover:underline hover:text-red-600 mt-[-30px] mb-5' onClick={(() => setCounter(-410))}>Create an account</h1>
                                    <input type="text" placeholder='Phone number' required className='border h-[50px] w-[300px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <input type="text" placeholder='Password' required className='border h-[50px] w-[300px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <button type="submit" className="text-white  w-[300px] bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-3 m-auto ">Login</button>
                                </form>
                            </div>
                            <div className='mt-[-15px]'>
                                {/* Create Account */}
                                <form action="" className='flex flex-col gap-2 w-[410px] items-center'>
                                    <h1 className='text-3xl font-semibold mb-7 text-gray-700 '>Sign Up</h1>
                                    <h1 className='font-medium text-lg text-red-500 cursor-pointer hover:underline hover:text-red-600 mt-[-30px] mb-5' onClick={(() => setCounter(0))}>Login to your Account</h1>
                                    <input type="text" placeholder='Name' required className='border h-[50px] w-[300px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <input type="text" placeholder='Phone number' required className='border h-[50px] w-[300px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <input type="text" placeholder='Password' required className='border h-[50px] w-[300px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <div className='w-[300px]'>
                                        <input type="text" placeholder='OTP' required className='border h-[40px] w-[100px] rounded-xl pl-4 outline-none bg-white m-auto mr-5' />
                                        <button type="submit" className="text-white h-[40px] w-[90px] bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-3 m-auto ">Send OTP</button>
                                    </div>
                                    <button type="submit" className="text-white  w-[300px] bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-3 m-auto ">SignUp</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className='h-[250px] overflow-hidden flex items-end justify-center mt-[-20px]'>
                        <img src={Login} className='h-[250px] ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar