import React from "react";
import kidsPic1 from "../../assets/images/de064709-fd30-4893-ab93-1c9aa53aacda.__CR0,0,970,600_PT0_SX970_V1___.jpg";
import kidsPic2 from "../../assets/images/830075-Musical-Instruments-Toys-White-background-Little-girls.jpg";
import kidsPic3 from "../../assets/images/toy-musical-instruments-wooden-background_635416-1966.avif";
import { Carousel } from "flowbite-react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <>
      <Marquee>
        <div className="flex justify-between items-center rounded-lg p-4">
          <span className="mx-12 text-lime-600 text-lg font-bold mb-2 ">
          Stock Limited!!!!
          </span>
          <h1 className="mx-12 text-red-700 text-3xl font-bold mb-4">
            Today 60% Discount !!!!
          </h1>
          <span className="mx-12 text-green-600 text-lg font-bold ">
            Hurry Up!!!!!!
          </span>
          <h1 className="mx-12 text-red-700 text-3xl font-bold mb-4">
            Today 60% Discount !!!!
          </h1>
        
        </div>
      </Marquee>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={kidsPic2} alt="" className="w-full" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={kidsPic1} alt="" className="w-full" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={kidsPic3} alt="" className="w-full" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
