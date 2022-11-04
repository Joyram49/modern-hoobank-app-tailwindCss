import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../data/constants";

const Footer = () => {
  return (
    <section className='flex-1 flex flex-col items-start justify-center gap-6 my-10 '>
      <div className='w-full flex flex-row flex-wrap gap-10'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <img
            src={logo}
            alt='logo'
            className='w-[182px] h-auto object-contain'
          />
          <p className='font-poppins text-base font-normal text-dimWhite max-w-[380px]'>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className='flex-1 flex flex-wrap flex-col ss:flex-row gap-6 md:gap-0 justify-between items-start'>
          {footerLinks.map((flinks, index) => (
            <div className='flex flex-col' key={index}>
              <h2 className='text-white text-lg font-medium font-poppins mb-2'>
                {flinks.title}
              </h2>
              <ul className='list-none'>
                {flinks.links.map((link, index) => (
                  <li
                    key={link.name + index}
                    className={`${
                      index === flinks.links.length - 1 ? "mb-0" : "mb-1"
                    }  font-poppins text-base font-normal`}
                  >
                    <a
                      href={link.link}
                      className='text-dimWhite hover:text-secondary'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite'>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } `}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
