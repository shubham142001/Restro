import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import corousel1 from '../assets/co1.png'
import corousel2 from '../assets/co2.png'
import corousel3 from '../assets/co3.png'

function Corousel() {
    const cart = [
        { id: 1, img: corousel1 },
        { id: 2, img: corousel2 },
        { id: 3, img: corousel3 },
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enables automatic sliding
        autoplaySpeed: 2000,
        arrows: false, 
    };

    return (
        <>
            <div className='xl:h-[400px] xl:w-[430px] lg:h-[300px] lg:w-[330px] rounded-[50%] overflow-hidden lg:mt-5 md:h-[250px] md:w-[250px]'>
                <Slider {...settings}>
                    {cart.map(cart => (
                        <img key={cart.id} src={cart.img} alt="" className='xl:h-[400px] xl:w-[450px] lg:h-[300px] lg:w-[330px] md:h-[230px] md:w-[250px]' />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Corousel