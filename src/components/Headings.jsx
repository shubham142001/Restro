import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Headings({ name, name1 }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once when it comes into view
    threshold: 0.1,    // Start animating when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      className="flex justify-center lg:pt-10 pb-5"
      initial={{ opacity: 0, translateY: 20 }}
      animate={inView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="sm:text-5xl text-sky-600 py-5 text-4xl">
        {name}
        <span className="text-green-600">{name1}</span>
      </h1>
    </motion.div>
  );
}

export default Headings;
