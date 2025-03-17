import React from 'react';
import { categories } from '../data/categories';


const FeaturedCategories = React.forwardRef((props,ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Categories
          <span className="block mt-2 text-blue-600 text-xl font-medium">Explore Popular Collections</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${category.color} p-6 pb-8`}>
                <div className="relative rounded-lg overflow-hidden mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-68 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.subtitle}</p>
                
                <ul className="space-y-2  ">
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturedCategories;