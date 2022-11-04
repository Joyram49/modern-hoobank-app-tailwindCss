import React from "react";
import { stats } from "../data/constants";

const Stats = () => {
  return (
    <section className='w-full flex flex-row flex-wrap items-center justify-start ss:justify-around py-10 gap-10'>
      {stats.map((stat, index) => (
        <React.Fragment key={stat.id}>
          <div className='flex flex-row gap-10 items-center'>
            <h2 className='text-white font-poppins font-semibold text-[24px] ss:text-[36px] leading-[28px] ss:leading-[48px]'>
              {stat.value}
            </h2>
            <p className='text-gradient font-medium uppercase text-xl'>
              {stat.title}
            </p>
          </div>
          <div
            className={` w-[1.6px] h-4 bg-slate-300 rounded-full ${
              index === stats.length - 1 ? "hidden" : "hidden md:block"
            } `}
          />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Stats;
