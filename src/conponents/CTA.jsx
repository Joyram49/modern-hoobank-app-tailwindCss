import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className='flex-1 bg-black-gradient my-20 rounded-[14px] box-shadow'>
      <div className='px-6 ss:px-16 py-4 ss:py-10 flex flex-col md:flex-row justify-center items-center'>
        <div className='flex-1 flex flex-col items-start justify-center'>
          <h1 className='font-poppins text-white font-medium text-[36px] md:text-[44px] leading-[52px] md:leading-[60px]'>
            Let’s try our service now!
          </h1>
          <p className='font-poppins text-dimWhite w-full md:max-w-[470px] my-5 font-normal text-[16px] leading-7'>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default CTA;
