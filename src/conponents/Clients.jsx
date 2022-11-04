import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";
import { clients } from "../data/constants";

const Clients = () => {
  return (
    <section
      id='clients'
      className='flex-1 flex flex-wrap justify-around items-center gap-10 sm:gap-20'
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className='hover:border hover:ring-2 hover:ring-slate-700 p-4 '
        >
          <img
            src={client.logo}
            alt='client-logo'
            className='w-[124px] sm:w-[194px] h-auto object-contain cursor-pointer'
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
