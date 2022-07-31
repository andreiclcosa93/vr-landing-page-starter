import React from 'react';

//import components
import Users from '../components/Users';

//import Images
import Img from '../assets/img/banner-img.png';

const Banner = () => {
  return ( 
      <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
          <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
                {/* text */}
                <div>
                    <h1 className='text-3xl font-bold mb-8 2xl:text-5xl lg:leading-snug '>Let's Explore <br /> WebSite-Design.</h1>
                
                <p className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                {/* btns */}
                    <div className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'>
                      <button className='btn'>Get it now</button>
                      <a className='border-b-2 border-transparent hover:border-white transition ease-out' href='/'>Explore Device</a>
                    </div>
                    <Users />
                </div>

                {/* image */}
                <div>
                  <img src={Img} alt=''/>
                </div>
            </div>
          </div>
      </section>
    );
};

export default Banner;
