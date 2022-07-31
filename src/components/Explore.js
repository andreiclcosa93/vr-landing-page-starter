import React from 'react';

const Explore = () => {
  return ( 
   
    <section className='min-h-[400px] mb-16  lg:mb-4'>
       <div className='container mx-auto mt-20 h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3 className='text-3xl font-semibold mb-8'>Explore product in new  way</h3>
          <p className='max-w-xs mb-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          {/* form */}
          <form className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'>
            <input className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md' type="text" placeholder='Your email'/>
            <button className='btn'>Start</button>
          </form>
        </div>
      </div>
    </section>
  
  );
};

export default Explore;
