import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../data/constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center py-6 '>
      <img src={logo} alt='website-logo' className='w-[128px] h-auto object' />
      <ul className='hidden sm:flex flex-1 justify-end items-center gap-10 list-none'>
        {navLinks.map((navLink, index) => (
          <li
            key={navLink.id}
            className={`font-poppins text-base md:text-lg font-normal ${
              active === navLink.title ? "text-white" : "text-dimWhite"
            } `}
            onClick={() => setActive(navLink.title)}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <div className='flex flex-1 justify-end items-center sm:hidden'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[32px] h-[32px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-20 right-0 p-6 bg-black-gradient mx-4 mt-2 min-w-[140px] rounded sidebar`}
        >
          <ul className='flex flex-col list-none flex-1 justify-start items-center gap-10'>
            {navLinks.map((navLink, index) => (
              <li
                key={navLink.id}
                className={`font-poppins text-base md:text-lg font-normal ${
                  active === navLink.title ? "text-white" : "text-dimWhite"
                } `}
                onClick={() => setActive(navLink.title)}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
