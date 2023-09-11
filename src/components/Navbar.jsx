import React from "react";
import { Link as Anchor } from "react-router-dom";
import Search from "../components/Search";
import ButtonMenu from "../components/ButtonMenu";
import DesplegableCat from '../components/DesplegableCat';
import DropdownMenu from './DropdownMenu';

function NavBar() {

  return (
    <nav className="bg-[#007BFF] ">
        <ButtonMenu />
      <div className="/*bg-[#333]*/ is flex  justify-around items-center">
        <div className="/*bg-[#275659]*/ ls flex items-center gap-[2rem]">
          <Anchor to={"/"}>
            <img
              src="/logo/logonav.png"
              alt="logo"
              className="logo w-[12vh] 
            max-sx:hidden
            max-2xs:hidden
            "
            />
          </Anchor>
          <Search />
        </div>
        <DropdownMenu />
      </div>
      <div className="cda flex ml-[7rem] max-sx:gap-[1rem] max-sx:ml-[2rem]">
        <DesplegableCat />
        <Anchor to={'/'} className='text-[#fefefe] gap-[1rem] max-sx:text-[1.5rem] text-[1.7rem]'>
          <p>Mis compras</p>
        </Anchor>
      </div>
    </nav>
  );
}

export default NavBar;