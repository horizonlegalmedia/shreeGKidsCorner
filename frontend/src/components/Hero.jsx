import React from 'react';
import {mainBanner} from '../images/index'
const Hero = () => {
  return (
    <section className='min-h-screen'>
      <div className="grid md:grid-cols-2 md:gap-8">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left px-4 md:px-8 py-12 md:py-32">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
            Premium Toys & Adorable Stationery
            <span className="block text-pink-600 mt-2">Perfect for Every Occasion!</span>
          </h1>

          <p className="md:text-lg text-gray-600 mb-8 leading-relaxed">
            Find the cutest stationery, premium toys, and the best birthday return gifts—all in one place!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 overflow-hidden flex items-center justify-center">
          <img
            src={mainBanner} // Replace with your image URL
            alt="Premium Toys and Stationery"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>

    // <section>
    //   <div className="bg-[url('https://img.freepik.com/free-photo/school-supplies-with-copy-space-middle_24837-89.jpg?ga=GA1.1.21085983.1740976616&semt=ais_hybrid')] bg-cover w-screen h-screen bg-no-repeat">

    //   </div>
    // </section>
  );
};

export default Hero;