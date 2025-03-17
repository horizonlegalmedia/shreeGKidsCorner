import React from 'react';

const Testimonials =React.forwardRef((props,ref) => {
  const reviews = [
    {
      id: 1,
      name: "Shobhit",
      location: "Bareilly",
      rating: 5,
      text: "The cutest stationery collection I've ever seen! My daughter loved the birthday return gifts we ordered. Fast delivery and excellent packaging.",
      image: {}
    },
    {
      id: 2,
      name: "Akshat",
      location: "Moradabad",
      rating: 4,
      text: "Great quality educational toys. The STEM kits are fantastic - both fun and learning combined. Will definitely order again!",
      image: {}
    },
    {
      id: 3,
      name: "Suhani",
      location: "Ghaziabad",
      rating: 5,
      text: "Absolutely love their unique designs! The premium toys are worth every penny. Best gift shop online in India!",
      image: {}
    },
    // Add more reviews as needed
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center mb-4 bg-pink-100 text-pink-800 px-6 py-2 rounded-full">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">⭐ 4.8/5</span>
            <span className="ml-2">Based on 1,235+ Happy Customers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gray-100 px-8 py-4 rounded-full">
            <span className="text-gray-600">Proudly trusted by:</span>
            <span className="font-bold text-gray-800">1,500+</span>
            <span className="text-gray-600">Schools &</span>
            <span className="font-bold text-gray-800">25,000+</span>
            <span className="text-gray-600">Parents Nationwide</span>
          </div>
        </div> */}
      </div>
    </section>
  );
});

export default Testimonials;