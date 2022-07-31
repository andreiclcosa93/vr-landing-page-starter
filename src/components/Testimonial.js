import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return ( 
    <secction className='mb-64 lg:mb-48'>
      <div className='container mx-auto'>
        <div className='bg-purple-400/10 max-h-[400pxp] p-12 rounded-lg'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-9'>What our clients say</h2>
            <p className='max-w-2xl mx-auto mb-12 lg:mb-24'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
          {/* slider */}
          <div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </secction>
  );
};

export default Testimonial;
