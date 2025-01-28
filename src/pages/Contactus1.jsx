import React, { useState,useEffect } from "react";
import { Loader } from '../components/Loader'
import Contactus from '../components/Contactus'

function Contactus1() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? <Loader /> : <Contactus />}
    </div>
  )
}

export default Contactus1