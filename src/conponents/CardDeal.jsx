import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className='flex-1 flex flex-col-reverse md:flex-row items-start justify-center my-20 gap-20 '>
      <div className='flex-1 self-center flex flex-col items-start justify-center '>
        <h2 className='font-poppins text-white font-medium text-[36px] md:text-[44px] leading-[52px] md:leading-[60px]'>
          Find a better card deal <br className='hidden ss:block' /> in few easy
          steps.
        </h2>
        <p className='font-poppins text-dimWhite w-full md:max-w-[470px] my-5 font-normal text-[16px] leading-7'>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className='w-[100%] md:w-[50%] h-auto object-contain'>
        <img src={card} alt='card' className='w-full h-full object-contain' />
      </div>
    </section>
  );
};

export default CardDeal;
