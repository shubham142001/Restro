import Menu from '../components/Menu'
import React, { useState,useEffect } from "react";
import { Loader } from '../components/Loader'

function MenuPage() {
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
      {isLoading ? <Loader /> : <Menu />}

    </div>
  )
}

export default MenuPage