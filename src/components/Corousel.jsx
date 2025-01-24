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
            <div className='h-[400px] w-[430px] rounded-[50%] overflow-hidden'>
                <Slider {...settings}>
                    {cart.map(cart => (
                        <img key={cart.id} src={cart.img} alt="" className='h-[400px] w-[450px]' />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Corousel