import React from "react";
import { quotes, people01, people02, people03 } from "../assets";

const TestimonialCard = ({ id, content, name, title, img }) => {
  return (
    <div className='max-w-max sm:max-w-[45%] md:max-w-[30%] flex flex-col items-start justify-center feature-card p-8 rounded-[10px]'>
      <img
        src={quotes}
        alt='quotes'
        className='w-[32px] h-[32px] object-contain'
      />
      <p className='font-poppins text-white w-full md:max-w-[470px] my-10 font-normal text-[16px] leading-7'>
        {content}
      </p>
      <div className='w-full  flex flex-row'>
        <div className='self-center w-[48px] h-[48px] rounded-full mr-4'>
          <img
            src={img}
            alt='people'
            className='w-[100%] h-[100%] object-contain'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center items-start gap-1'>
          <h2 className='font-poppins text-white font-medium text-lg'>
            {name}
          </h2>
          <p className='font-poppins text-dimWhite font-normal text-[16px] leading-4'>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
