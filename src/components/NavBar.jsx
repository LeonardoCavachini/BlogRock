import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='bg-[#2D2D2D] shadow-[0px 6px 10px rgba(0, 0, 0, 0.1)] fixed w-[100%] md:flex md:p-7 md:px-80 md:justify-between'>
      <div className='text-[#FFFFFF] font-[Rubik] sm: text-lg ml-[40%] md:ml-0 md:text-4xl md:font-bold md:leading-9'>
        <Link to={'/'} className='cursor-pointer dm:w-20px'>
          Rock Blog
        </Link>
      </div>
      <div className='text-[#FFFFFF] font-[Rubik] pl-6 md:text-3xl md:font-medium md:leading-9  md:flex'>
        <div className='md:mx-24'>
        <Link to={'/'} className='cursor-pointer'>Post</Link>
        </div>
        <div>
        <Link to={'/contact'} className='cursor-pointer'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
