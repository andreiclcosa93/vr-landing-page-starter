import React from 'react';

  //import icons
  import {IoClose} from 'react-icons/io5';

const NavMobile = ({setNavMobile}) => {
  return ( 
    <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
      <IoClose onclick={() => setNavMobile(false)} className='text-3xl absolute left-4 top-5 cursor-pointer'/>
        <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary'>
          <li className='text-lg'><a href="/">Home</a></li>
          <li className='text-lg'><a href="/">Company</a></li>
          <li className='text-lg'><a href="/">Feature</a></li>
          <li className='btn'><a href="/">Sign up</a></li>
        </ul>
    </nav>
  );
};

export default NavMobile;
