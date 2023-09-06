import React, { useState } from 'react';
import Button from './Button';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7' style={{
        backgroundImage: 'linear-gradient(to right, #000000, #333333)' /* Adjust gradient colors here */,
      }}>
        <div className='font-bold text-5xl cursor-pointer flex items-center font-[Poppins] text-white'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          My Form
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-opacity-70 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
         
        </ul>
      </div>
    </div>
  );
}

export default Nav;
