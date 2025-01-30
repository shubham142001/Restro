import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import Headings from "../components/Headings";
import Speciality from "../components/Speciality";
import Popular from "../components/Popular";
import Steps from "../components/Steps";
import Counter from "../components/Counter";
import { Loader } from "../components/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Use useEffect to handle the timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Head />
          <Headings name="Our " name1="Speciality" />
          <Speciality />
          <Headings name="Most Popu" name1="lar foods" />
          <Popular />
          <Steps />
          <Headings name="Lets Number" name1="To Speak" />
          <Counter />
        </div>
      )}
    </div>
  );
}

export default Home;
