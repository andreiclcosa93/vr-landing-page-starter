import React from 'react';

//import images
import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';

const Experience = () => {
  return ( 
    <section className='mb-12 lg:mb-24'>
        <div className='container mx-auto'>
          <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
            <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
              {/* images */}
              <div className='self-start'>
                <img src={Img1} alt='' />
              </div>
              <div className='self-end'>
                <img src={Img2} alt='' />
              </div>
            </div>

            {/* text */}
            <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'>
              <h2 className='text-3x1 front-bold mb-6 '>
                New Experience in Playing Games
              </h2>
              <p className='font-secondary mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            
              <button className='btn'>Get it now</button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Experience;
