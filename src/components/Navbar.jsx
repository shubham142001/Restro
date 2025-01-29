import React, { useState, useRef, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Login from '../assets/login.gif'
import { FaHome } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeCircles } from "react-loader-spinner";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [loader, setLoader] = useState(false);
    const [iconSize, setIconSize] = useState(40);
    const [count, setCount] = useState(0);
    const backgroundRef = useRef(null);
    const [counter, setCounter] = useState(0);
    const [down, setDown] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger the animation only once when it comes into view
        threshold: 0.1,    // Start animating when 10% of the component is visible
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoader(true);  
        
        try {
            const response = await axios.post("http://192.168.0.109:8080/api/auth/login", {
                email,
                password,
            });
            toast.success("✅ Login successful!", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            toast.error("❌ Login failed.", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        finally {
            setEmail("");
            setPassword("");
            setLoader(false);
            setIsOpen(false);
        }

    };


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
            <div className='sticky top-0 z-10 overflow-hidden bg-white select-none flex-shrink-0 xl:h-20 lg:h-20 w-auto lg:pt-2 md:h-24 sm:h-18 sm:pt-6 h-14 '>
                <div className=' lg:p-0 flex justify-between lg:px-20 md:px-10 items-center md:h-20 lg:h-16 sm:px-2 flex-shrink-0 lg:gap-4 md:gap-6 sm:gap-2 px-8 py-2 sm:py-0'>
                    <img src={logo} alt="" className='xl:h-18 xl:w-18 md:h-12 md:w-12 sm:h-12 sm:w-12 h-10 w-10' />
                    <motion.h1 className='lg-text-4xl font-semibold xl:ml-[-30px] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent md:text-2xl md:ml-[-20px] sm:md:ml-[-20px] sm:text-xl text-2xl' ref={ref}
                        initial={{ opacity: 0, translateX: -50 }}
                        animate={inView ? { opacity: 1, translateX: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}>Flavourest</motion.h1>
                    <input type="text" placeholder='Search Your Food' className='border xl:h-[50px] xl:w-[500px] rounded-3xl sm:pl-4 pl-3 outline-none bg-white md:h-[40px] lg:w-[500px] md:w-[220px] sm:w-[200px] sm:h-[40px] h-[35px] hidden sm:block' />
                    <motion.div className='sm:flex md:gap-5  justify-center flex-shrink-0 sm:gap-3  hidden' initial={{ opacity: 0, translateY: 50 }}
                        animate={inView ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}>

                        <Link to="/"><h1 className='md:text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent sm:text-lg'>Home</h1></Link>
                        <Link to="/Menu"><h1 className='text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent sm:text-lg'>Menu</h1></Link>
                        <Link to="/Contactus1"><h1 className='text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent sm:text-lg'>Contact</h1></Link>
                    </motion.div>

                    <motion.div className='text-black hover:text-green-500 justify-center flex-shrink-0 sm:hidden' initial={{ opacity: 0, translateY: 50 }}
                        animate={inView ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }} onClick={() => setDown(!down)}>
                        <IoSearch size={30} className='hover:cursor-pointer transition-all duration-500 ml-24' />
                    </motion.div>

                    <Link to="/CartPage"><motion.div className='text-black hover:text-green-500 w-10 flex justify-center flex-shrink-0 ' initial={{ opacity: 0, translateY: -50 }}
                        animate={inView ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}>
                        <FaShoppingCart size={25} className='hover:cursor-pointer transition-all duration-500 ' />
                    </motion.div></Link>



                    <div className=' hover:cursor-pointer flex-shrink-0 justify-center items-center flex' onMouseEnter={() => setIconSize(50)}
                        onMouseLeave={() => setIconSize(40)}
                    >
                        <div className='flex gap-1 items-center text-black hover:text-green-500 '>

                            <motion.div onClick={handleOpen} className='flex md:gap-1' initial={{ opacity: 0, translateX: 50 }}
                                animate={inView ? { opacity: 1, translateX: 0 } : {}}
                                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}>
                                <div className='sm:block hidden' >
                                    <h2 className='md:text-lg md:font-bold transition-all duration-700 sm:font-semibold'>Hello</h2>
                                    <p className='font-semi-bold text-md '>Shubham</p>
                                </div >

                                <FaUserCircle size={iconSize}
                                    style={{ transition: 'all 0.3s ease' }}
                                    className='sm:block hidden'
                                />
                                <FaUserCircle size={30}
                                    style={{ transition: 'all 0.3s ease' }}
                                    className='sm:hidden block'
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className=" w-full rounded-br-xl rounded-bl-2xl text-black text-lg bg-slate-100 overflow-hidden transition-all "
                style={{
                    maxHeight: down ? "500px" : "0px", // Smooth height transition
                    transition: "max-height 0.8s ease",
                }}
            >
                <ul className="flex flex-col px-5 py-2 space-y-4 items-center">

                    <li className="hover:text-green-500 font-sans font-semibold flex items-center gap-2  border-white">
                        <input type="text" placeholder='Search Your Food' className='rounded-2xl p-2 pl-5 w-[350px] outline-none' />
                    </li>

                    <Link to="/">
                        <li className="hover:text-green-500 font-sans font-semibold flex items-center  gap-2 border-b-2 border-white justify-center w-[350px]" onClick={() => setDown(false)}>
                            <FaHome /> Home
                        </li>
                    </Link>
                    <Link to="/Menu">
                        <li className="hover:text-green-500 font-sans font-semibold flex items-center gap-2 border-b-2 border-white justify-center w-[350px]" onClick={() => setDown(false)}>
                            <MdRestaurantMenu /> Menu
                        </li>
                    </Link>
                    <Link to="/Contactus1">
                        <li className="hover:text-green-500 font-sans font-semibold flex items-center gap-2 justify-center w-[350px]" onClick={() => setDown(false)}>
                            <IoMdContacts /> Contact us
                        </li>
                    </Link>
                </ul>
            </div>

            <div className='bg-black bg-opacity-35 xl:h-[800px] sm:w-full md:h-full border overflow-hidden mt-[-85px] z-20 fixed select-none h-[1000px] ' ref={backgroundRef} >
                <div className='bg-white xl:h-full xl:w-[30%] lg:w-[40%] md:w-[410px] sm:w-[410px] overflow-x-hidden float-right flex flex-col pt-10 transition-all mt-[-10px] overflow-hidden  sm:h-full h-full md:pt-0' style={{
                    transform: `translatex(${count}px)`,
                    transition: '0.8s ease'
                }}>
                    <IoMdClose size={30} className='ml-5 cursor-pointer mt-11 sm:mt-0 md:mt-6' onClick={handleClose} />
                    <div className="gap-10 h-[370px]">
                        <div className='flex ' style={{
                            transform: `translatex(${counter}px)`,
                            transition: '0.8s ease'
                        }}>
                            <div >
                                {/* Login Form */}
                                <form action="" className='flex flex-col gap-6 md:w-[410px] sm:w-[410px] items-center w-[400px] h-[410px] '>
                                    <h1 className='text-3xl font-semibold sm:mb-3 mb-5 text-gray-700 '>Login</h1>
                                    <h1 className='font-medium text-lg text-red-500 cursor-pointer hover:underline hover:text-red-600 mt-[-30px] mb-5 sm:mb-0' onClick={(() => setCounter(-410))}>Create an account</h1>
                                    <input type="email" value={email} placeholder='Email' required className='border h-[50px] sm:w-[300px] w-[350px] rounded-xl pl-4 outline-none bg-white m-auto sm:mb-0' onChange={(e) => setEmail(e.target.value)} />
                                    <input type="text" placeholder='Password' value={password} required className='border h-[50px] sm:w-[300px] w-[350px] rounded-xl pl-4 outline-none bg-white m-auto sm:mb-0' onChange={(e) => setPassword(e.target.value)} />
                                    <button type="submit" className="text-white sm:w-[300px] w-[350px] bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-3 m-auto " onClick={handleLogin} disabled={loader}>{loader ? (
                                        <div className="flex justify-center items-center">
                                            <ThreeCircles
                                                visible={true}
                                                height="30"
                                                width="30"
                                                color="#fff"
                                                ariaLabel="three-circles-loading"
                                            />
                                        </div>
                                    ) : "Login"}</button>
                                </form>
                            </div>
                            <div className='mt-[-15px] sm:pl-16 md:pl-0  w-[400px] '>
                                {/* Create Account */}
                                <form action="" className='flex flex-col gap-2 md:w-[410px] items-center pl-8 sm:pl-0'>
                                    <h1 className='text-3xl font-semibold sm:mb-7 text-gray-700 mt-5 sm:mt-0 mb-9'>Sign Up</h1>
                                    <h1 className='font-medium text-lg text-red-500 cursor-pointer hover:underline hover:text-red-600 mt-[-30px] sm:mb-5 mb-7' onClick={(() => setCounter(0))}>Login to your Account</h1>
                                    <input type="text" placeholder='Name' required className='border h-[50px] sm:w-[300px] w-[350px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <input type="text" placeholder='Phone number' required className='border h-[50px] sm:w-[300px] w-[350px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <input type="text" placeholder='Password' required className='border h-[50px] sm:w-[300px] w-[350px] rounded-xl pl-4 outline-none bg-white m-auto' />
                                    <div className='w-[350px] sm:w-[300px]'>
                                        <input type="text" placeholder='OTP' required className='border h-[40px] sm:w-[100px] w-[150px] rounded-xl pl-4 outline-none bg-white m-auto mr-5' />
                                        <button type="submit" className="text-white h-[40px] w-[90px] bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-3 m-auto ">Send OTP</button>
                                    </div>
                                    <button type="submit" className="text-white  sm:w-[300px] w-[350px] bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-3 m-auto ">SignUp</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className='h-[250px] overflow-hidden flex items-end sm:justify-center mt-[-20px]'>
                        <img src={Login} className='h-[250px] ml-4 sm:ml-0' />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Navbar