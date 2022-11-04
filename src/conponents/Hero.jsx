import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id='home'
      className='flex flex-col  md:flex-row md:gap-20 py-6 sm:py-16'
    >
      <div className='flex-1 flex flex-col items-start justify-center px-6 sm:px-16 xl:px-0'>
        <div className='max-w-max flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2 px-4 py-[6px] box-shadow'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px] object-contain'
          />
          <p className='max-w-max text-dimWhite font-poppins font-normal text-sm ss:text-lg ml-2 uppercase'>
            <span className='text-white font-medium'>20%</span> discount for{" "}
            <span className='text-white font-medium'>1 month</span> account
          </p>
        </div>
        <div className='flex flex-row justify-between items-center font-medium sm:gap-10 '>
          <h1 className='flex-1 text-white font-poppins font-semibold text-[36px] ss:text-[72px]  capitalize leading-[55px] ss:leading-[100.58px]'>
            The next <br />
            <span className='text-gradient'>generation</span>
          </h1>
          <div className='self-start hidden ss:flex items start ss:mt-4'>
            <GetStarted />
          </div>
        </div>
        <h1 className='w-max text-white font-poppins font-semibold text-[36px] ss:text-[72px]  capitalize leading-[55px] ss:leading-[100.58px]'>
          Payment Method.
        </h1>
        <p className='font-poppins text-dimWhite font-base text-lg max-w-[470px] text-justify mt-5'>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className='flex-1 flex items-center justify-center md:my-0 my-10 relative'>
        <img
          src={robot}
          alt='robot'
          className='w-full h-full object-contain z-100 relative'
        />
        <div className='absolute top-[-20%] w-[40%] h-[75%] pink__gradient z-0' />
        <div className='absolute bottom-40 w-[40%] h-[80%] rounded-full white__gradient z-20' />
        <div className='absolute right-20 bottom-20 w-[50%] h-[50%]  blue__gradient z-10' />
      </div>
      <div className='flex items-center justify-center ss:hidden items start ss:mt-4 my-6'>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
