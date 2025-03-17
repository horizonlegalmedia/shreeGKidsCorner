import React from 'react';
import { banner } from '../images/index'

const Hero = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-gradient-to-r from-pink-50 to-blue-50 h-[calc(100vh-4rem)]">
      <div className="grid md:grid-cols-2 gap-8 bg-amber-200">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left px-4 md:px-8 py-12 md:py-44">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Premium Toys & Adorable Stationery
            <span className="block text-pink-600 mt-2">Perfect for Every Occasion!</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
        <div className="order-1 md:order-2">
  <div className="w-full h-full bg-amber-500">
    <img 
      src={banner}
      alt="Premium Toys and Stationery" 
      className="w-full h-auto max-w-full max-h-full object-contain aspect-3/2"
    />
  </div>
</div>
      </div>
    </section>
  );
});

export default Hero;