import React, { useState } from 'react';

//import components

import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';

const App = () => {
  const [navMobile, setNavMobile] = useState(true);
  return ( 
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile}/>
      <Banner />
      {/* mobile nav */}
      <div className={`${navMobile ? 'right-0' : '-rightfull'} fixed top-0 bottom-0 w-48 transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
    </div>
  );
};

export default App;
