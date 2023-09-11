import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link as Anchor } from 'react-router-dom';

export default function DropdownMenu() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const isLoggedIn = () => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return token && user;
    };

    function backHome() {
        localStorage.clear();
        navigate('/');
    }

    const [openCategories, setOpenCategories] = useState(false);

    const toggleCategories = () => {
        setOpenCategories(!openCategories);
    };

    return (
        <div>
            {!isLoggedIn() ? (
                <div className='cont-2 flex items-center max-sx:p-[.7rem]'>
                    <img className='logo2 max-sx:hidden w-[3.5rem]' src="/public/Menu/user.png" alt="logo-user" />
                    <div className='max-sx:hidden p-[1rem] anlr '>
                        <Anchor to={"/Login"}><button className="a max-sx:hidden text-[1.5rem] text-[white]">Log in</button> </Anchor>|
                        <Anchor to={"/Register"}><button className="a a2 max-sx:hidden text-[1.5rem] mr-[1rem] text-[white]">Register</button> </Anchor>
                    </div>
                    <Anchor to={'/carritoPage'} className='flex flex-col items-center'>
                        <svg className="carrito w-8 h-8 text-[white]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                        </svg>
                    </Anchor>

                </div>

            ) : (
                <div className=' flex items-center justify-between '>
                    <div onClick={toggleCategories} className={`perfil per flex w-[15rem] max-sx:hidden ${openCategories ? 'flex' : 'max-sx:hidden'}`}>
                        <img className='w-[3rem] cursor-pointer' src={user.photo} alt="photo" />
                        <p className="name text-[#fefefe] gap-[1rem] text-[1.7rem] cursor-pointer font-semibold flex items-center justify-center">
                            {user.name}
                        </p>
                    </div>
                    {openCategories && (
                        <div className="perfil absolute  right-[5rem] rounded-[.5rem] top-[5.6rem] bg-[#fffdfd] z-50 max-sx:hidden">
                            <div className='m-[.5rem] p-[.3rem] rounded-[.5rem] flex flex-col'>
                                <div className='flex items-center '>
                                    <Anchor to={'/ControlPanel'} className='flex items-center'>
                                        <img className='w-[5rem] cursor-pointer' src={user.photo} alt="photo" />
                                        <p className='text-[1.2rem]'>{user.email}</p>
                                    </Anchor>
                                </div>
                                <button onClick={backHome} className='text-[1.3rem] w-[30%] bg-[#f34a4a] rounded-[.4rem]'>Sign Out</button>
                            </div>
                        </div>
                    )}
                    <div className='flex'>
                        <Anchor to={'/carritoPage'} className='flex flex-col items-center'>
                            <svg className="w-8 h-8 text-[white]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                            </svg>
                        </Anchor>
                    </div>
                </div>
            )}
        </div>
    );
}
