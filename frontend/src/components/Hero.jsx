import React from 'react';
import { mainBanner } from '../images/index'
const Hero = React.forwardRef((props,ref) => {
  return (
      <section ref={ref}>
      <div className='flex flex-col-reverse md:flex-row h-full md:h-screen'>
        <div className='w-full md:w-1/2 h-1/2 md:h-screen px-4 md:px-8 py-8 md:py-40 text-center md:text-left bg-gradient-to-br from-rose-50 to-[#e6dcc0]'>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-6">
              Premium Toys & Adorable Stationery
              <span className="block text-pink-600 md:mt-2">Perfect for Every Occasion!</span>
            </h1>
            <p className="md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed">
              Find the cutest stationery, premium toys, and the best birthday return gifts—all in one place!
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 md:px-8 py-1 md:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 md:px-8 py-1 md:py-3 rounded-lg font-semibold transition-colors duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        </div>



        <div className='w-full md:w-1/2 h-1/2 md:h-screen'>
        <img src={mainBanner} alt='Stationary items' className='w-full h-full object-cover'/>
        </div>
      </div>
    </section>



  );
});

export default Hero;