import React, { useState } from 'react';
import Logo from '@/../public/logo.svg';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='absolute inset-x-0 top-0 h-16 flex justify-between items-center px-6 md:px-20 bg-gradient-to-b from-black to-black/0'>
      <Logo className='w-60' />
      {/* Ícone do menu hamburguer - alternar entre menu e ícone de fechar (X) */}
      <div className='md:hidden'>
        {menuOpen ? (
          <HiX
            className='text-white text-2xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-110'
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <HiMenu
            className='text-white text-2xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-110'
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </div>
      {/* Menu de navegação - mostrado em dispositivos maiores */}
      <div className={'hidden md:flex gap-6'}>
        <Link className='hover:text-white/50 transition duration-300 ease-in-out transform hover:scale-110' href='#'>
          Air
        </Link>
        <Link className='hover:text-white/50 transition duration-300 ease-in-out transform hover:scale-110' href='#'>
          Gravity
        </Link>
        <Link className='hover:text-white/50 transition duration-300 ease-in-out transform hover:scale-110' href='#'>
          Experience
        </Link>
        <Link className='hover:text-white/50 transition duration-300 ease-in-out transform hover:scale-110' href='#'>
          Shop
        </Link>
      </div>
      {/* Menu de navegação para dispositivos móveis - mostrado quando o menu está aberto */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center justify-center absolute inset-x-0 top-16 bg-gray-700 text-white py-4 px-6 backdrop-filter backdrop-blur-lg bg-opacity-60 rounded-md'>
          <Link href='#' className='my-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white/70'>
            Air
          </Link>
          <Link href='#' className='my-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white/70'>
            Gravity
          </Link>
          <Link href='#' className='my-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white/70'>
            Experience
          </Link>
          <Link href='#' className='my-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white/70'>
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
