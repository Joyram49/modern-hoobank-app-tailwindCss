import React from "react";
import { features } from "../data/constants";
import { star, send, shield } from "../assets";
import Button from "./Button";

const Business = () => {
  return (
    <section
      id='features'
      className='w-full flex flex-col md:flex-row justify-center items-start my-20 gap-10'
    >
      <div className='flex-1 flex flex-col items-start justify-center '>
        <h2 className='font-poppins text-white font-medium text-[36px] md:text-[44px] leading-[52px] md:leading-[60px]'>
          You do the business, <br className='hidden ss:block' /> we’ll handle
          the money.
        </h2>
        <p className='font-poppins text-dimWhite w-full md:max-w-[470px] my-5 font-normal text-[16px] leading-7'>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className='flex flex-col items-start justify-center'>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className='flex-1 flex flex-row feature-card py-4  box-border rounded-[12px] gap-8 px-4'
          >
            <div className='w-[58px] h-[58px]  flex items-center justify-center rounded-full self-center z-0 bg-dimBlue'>
              <img
                src={feature.icon}
                alt={feature.icon}
                className='z-10 w-[28px] h-[28px] object-contain'
              />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
              <h2 className='text-white font-poppins text-lg font-normal'>
                {feature.title}
              </h2>
              <p className='max-w-[470px]  text-dimWhite font-poppins text-[16px] font-normal'>
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
