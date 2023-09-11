import React, { useState } from 'react';
import { Link as Anchor } from 'react-router-dom';

export default function DesplegableCat() {

  const [openCategories, setOpenCategories] = useState(false);

  const toggleCategories = () => {
    setOpenCategories(!openCategories);
  };

  return (
      <div className="relative group bg-[#007BFF] w-[10%] ">
      <p
        className="text-[#fefefe] max-sx:text-[1.5rem] gap-[1rem] text-[1.7rem] cursor-pointer font-semibold flex items-center justify-center"
        onClick={toggleCategories}
      >
        More{' '}
        <svg
          className={`w-[1rem] mt-[0.4rem] ${openCategories ? 'transform rotate-180' : ''}`}
          class="w-4 h-4 text-[#fff] dark:text-[#fff]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </p>
      {openCategories && (
        <div className="max-sx:-left-[2rem] max-sx:w-[15rem] absolute  -left-[7rem] w-[23rem] rounded-[.5rem] bg-[#fffdfd] shadow-md z-20">
          <div >
            <p className="block  px-4 py-2  text-[1.5rem] cursor-pointer">
              Techs
            </p>
            <Anchor to={'/Phones'} className="block px-4 py-2 text-[#007BFF]  hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Phones
            </Anchor>
            <Anchor to={'/Tabs'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Tabs
            </Anchor>
            <Anchor to={'/Desktops'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Desktops
            </Anchor>
            <Anchor to={'/Notebooks'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Notebooks
            </Anchor>
          </div>
          <div>
            <p className="block px-4 py-2 text-[1.5rem] cursor-pointer">
              Gamers
            </p>
            <Anchor to={'/Chairs'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Gamer's chairs
            </Anchor>
            <Anchor to={'/Mouses'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Mouses
            </Anchor>
            <Anchor to={'/Pc'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              PC's Gamer
            </Anchor>
            <Anchor to={'/Microphones'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Microphones
            </Anchor>
          </div>
          <div>
            <p className="block px-4 py-2  text-[1.5rem] cursor-pointer">
              Audio & Video
            </p>
            <Anchor to={'/Headphones'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Headphones
            </Anchor>
            <Anchor to={'/SPEAKERS'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Speakers
            </Anchor>
            <Anchor to={'/Cameras'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Cameras
            </Anchor>
          </div>
          <div>
            <p className="block px-4 py-2  text-[1.5rem] cursor-pointer">
              Home & Appliances
            </p>
            <Anchor to={'/TV'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              TV
            </Anchor>
            <Anchor to={'/Fridge'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Fridges
            </Anchor>
            <Anchor to={'/Kitchens'} className="block px-4 py-2  text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Kitchens
            </Anchor>
            <Anchor to={'/Air'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Air conditioners
            </Anchor>
            <Anchor to={'/Laundrys'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Laundrys
            </Anchor>
            <Anchor to={'/Blenders'} className="block px-4 py-2 text-[#007BFF] hover:text-[white] hover:bg-[#007BFF] text-[1.3rem] cursor-pointer">
              Blenders
            </Anchor>
          </div>
        </div>
      )}
    </div>
  );
}