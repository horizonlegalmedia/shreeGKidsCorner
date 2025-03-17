import React from 'react';
import { products } from '../data/products';

const BestSellers =React.forwardRef((props,ref) => {
  
  return (
    <section ref={ref} className="py-16 md:py-20 bg-rose-50">
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
                  <p className="text-pink-600 font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </p>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default BestSellers;