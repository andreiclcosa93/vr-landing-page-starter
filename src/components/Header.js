import React from 'react';

//import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';

//import icons
import {HiMenu} from 'react-icons/hi';

const Header = ({setNavMobile}) => {
  return <header className='py-6'>
    <div className="container mx-auto">
        <div className='flex items-center justify-between'>
          {/* logo */}
          <a href="/" >
            <img className='h-[30px]' src={Logo} alt=''/>
          </a>
          {/* nav */}
          <Nav />
          {/* nav bar mobile */}
          <HiMenu onclick={() => setNavMobile(true)} className='lg:hidden text-3x1 text-white cursor-pointer'/>
        </div>
    </div>
  </header>;
};

export default Header;
