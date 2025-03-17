import React from 'react';
import { MessageCircle } from "lucide-react";
import { products } from '../data/products';

const BestSellers =React.forwardRef((props,ref) => {
  
  return (
    <section ref={ref} className="py-16 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Trending Products
          <span className="block mt-2 text-pink-600 text-xl font-medium">Our Most Popular Picks</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-pink-600 font-bold text-xs">
                    Rs {product.price.toFixed(2)}
                  </p>
                  {/* <button className="bg-pink-600 hover:bg-pink-700 text-white py-1 px-2 md:px-4 rounded-lg text-xs md:text-sm md:font-semibold transition-colors duration-300">
                    Buy
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* WhatsApp Icon */}
          <div className="bg-pink-500 rounded-full p-4">
          <MessageCircle size={28} />
          </div>

          {/* Text */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            For More Products, Contact Us on WhatsApp!
          </h2>

          {/* WhatsApp Link */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Chat on WhatsApp</span>
            <MessageCircle size={28}/>
          </a>
        </div>
      </div>
    </section>
  );
});

export default BestSellers;