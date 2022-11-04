import React from "react";
import { feedback } from "../data/constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id='product'
      className='flex-1 flex flex-col  items-start justify-start my-20 gap-10 '
    >
      <div className='w-full flex flex-col md:flex-row justify-between items-center'>
        <h2 className='font-poppins text-white font-medium text-[36px] md:text-[44px] leading-[52px] md:leading-[60px] w-full'>
          What people are <br className='hidden ss:block' /> saying about us
        </h2>
        <p className='font-poppins text-dimWhite w-full md:max-w-[470px] my-5 font-normal text-[16px] leading-7'>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      {/* testimonials card  */}
      <div className='w-full flex flex-row flex-wrap justify-center items-center py-10 gap-10'>
        {feedback.map((feebackItem) => (
          <TestimonialCard key={feebackItem.id} {...feebackItem} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
