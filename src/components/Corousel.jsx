import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import corousel1 from "../assets/co1.png";
import corousel2 from "../assets/co2.png";
import corousel3 from "../assets/co3.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Corousel() {
  const cart = [
    { id: 1, img: corousel1 },
    { id: 2, img: corousel2 },
    { id: 3, img: corousel3 },
  ];

  // Intersection Observer for animation
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it scrolls into view
    threshold: 0.1,     // Trigger when 10% of the component is visible
  });

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <>
      <motion.div
        ref={ref} // Attach ref for visibility detection
        className="xl:h-[400px] xl:w-[430px] lg:h-[300px] lg:w-[330px] rounded-[50%] overflow-hidden lg:mt-5 md:h-[250px] md:w-[250px] md:mt-24 sm:w-[250px] sm:h-[230px] sm:mt-20 h-[130px] w-[130px] mt-3 ml-[-100px]"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeInOut" }}
      >
        <Slider {...settings}>
          {cart.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt={`Carousel item ${item.id}`}
              className="xl:h-[400px] xl:w-[450px] lg:h-[300px] lg:w-[330px] md:h-[230px] md:w-[250px] sm:w-[250px] sm:h-[230px] h-[130px] w-[130px]"
            />
          ))}
        </Slider>
      </motion.div>
    </>
  );
}

export default Corousel;
