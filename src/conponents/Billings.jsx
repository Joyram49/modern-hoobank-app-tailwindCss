import React from "react";
import { bill, google, apple } from "../assets";

const Billings = () => {
  return (
    <div className='flex-1 flex flex-col md:flex-row items-start justify-center  my-20 gap-20'>
      <div className='w-[100%] md:w-[50%] h-auto object-contain'>
        <img src={bill} alt='bill' className='w-full h-full object-contain' />
      </div>
      <div className='flex-1 self-center flex flex-col items-start justify-center '>
        <h2 className='font-poppins text-white font-medium text-[36px] md:text-[44px] leading-[52px] md:leading-[60px]'>
          Easily control your <br className='hidden ss:block' /> billing &
          invoicing.
        </h2>
        <p className='font-poppins text-dimWhite w-full md:max-w-[470px] my-5 font-normal text-[16px] leading-7'>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className='w-max flex justify-start items-center mt-2 gap-4'>
          <a href='#'>
            <img src={google} alt='google' />
          </a>
          <a href='#'>
            <img src={apple} alt='apple' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Billings;
