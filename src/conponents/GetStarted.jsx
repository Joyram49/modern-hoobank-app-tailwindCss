import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className=' flex items-center justify-center w-[96px] h-[96px] sm:w-[124px] sm:h-[124px] bg-blue-gradient rounded-full p-[2px] cursor-pointer '>
      <div className='flex flex-col items-center justify-center w-full h-full bg-primary rounded-full'>
        <div className='flex flex-row items-start justify-center'>
          <p className='text-gradient font-poppins font-medium text-lg ml-[-10px]'>
            Get
          </p>
          <img
            src={arrowUp}
            alt='arrowUp'
            className='w=[23px] h-[23px] object-contain'
          />
        </div>
        <p className='font-poppins font-medium text-lg text-gradient'>
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
