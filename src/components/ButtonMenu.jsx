import React, { useState } from 'react';
import Drawer from "../components/Drawer";

const ButtonMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleNavbar}
                className=" hidden
                    max-sx:inline-flex max-sx:items-center max-sx:justify-center max-sx:p-2 max-sx:rounded-md max-sx:text-gray-400 max-sx:hover:text-white max-sx:hover:bg-[#2671a6] max-sx:focus:bg-gray-800 max-sx:focus:text-white max-sx:transition max-sx:duration-300 max-sx:ease-in-out" >
                <img
                    className="h-8 md:h-11 lg:h-16"
                    src="/public/Menu/menu.png"
                    alt="menu_icon"
                />
            </button>
            {isOpen && <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />}

        </div>
    );
};

export default ButtonMenu;
