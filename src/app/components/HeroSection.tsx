import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';  // Corrected Twitter icon import
import { FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import Button from './Button';

function HeroSection() {         
  return (
    <>
      <section className="bg-[#0a0908] w-full text-center pt-[7.5rem]">
        <p className="text-[2rem]">Hey! I&#39;m <span className="text-[#a9a8a7]">Roohia Bashir</span></p>

        <p className="text-[2rem]"><span className="text-[#a9a8a7]">I</span>&#39;m <span className="text-[#a9a8a7]">A F</span>ront <span className="text-[#a9a8a7]">E</span>nd <span className="text-[#a9a8a7]">W</span>eb <span className="text-[#a9a8a7]">D</span>eveloper</p>

        <p className="mt-[1.25rem] mb-[2rem] text-[1.125rem]">
          I can build user interface for websites and applications with <span className="text-[#a9a8a7]">React JS</span> and <span className="text-[#a9a8a7]">Next.Js</span>
          <br />
          I love front-end development.
        </p>

        <Button textName={"Hire Me"} />

        <div className="mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-[#a9a8a7] rounded-full">
          <FaFacebookF size={30} color="black" className="cursor-pointer" />
          <FaTwitter size={30} color="black" className="cursor-pointer" />
          <FaInstagram size={30} color="black" className="cursor-pointer" />
          <IoLogoWhatsapp size={30} color="black" className="cursor-pointer" />
          <FaTelegramPlane size={30} color="black" className="cursor-pointer" />
        </div>

        <div className="mt-[70px] w-full bg-[#1a1a1a] h-[78px] flex justify-evenly items-center">
          <Image src="/myImage/behance.png" alt="Behance" width={156} height={52} className="cursor-pointer" />
          <Image src="/myImage/dribble.png" alt="Dribble" width={156} height={52} className="cursor-pointer" />
          <Image src="/myImage/upwork.png" alt="Upwork" width={156} height={52} className="cursor-pointer" />
          <Image src="/myImage/freelance.png" alt="Freelance" width={156} height={52} className="cursor-pointer" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
