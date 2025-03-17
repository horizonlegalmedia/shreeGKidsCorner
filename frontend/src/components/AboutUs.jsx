import React from 'react'

const AboutUs = React.forwardRef((props,ref) => {
    return (
        <div ref={ref} className='px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            <div className='order-2 md:order-1 flex flex-col justify-center'>
                <h1 className='text-3xl md:text-4xl text-[#df7077] mb-6 font-bold text-center md:text-left'>
                    About <span className='underline decoration-[#f8d448] decoration-4'>Us</span>
                </h1>
                <p className='text-gray-700 text-lg leading-relaxed space-y-4'>
                    <span className='block'>At <strong>[Your Toy Shop Name]</strong>, we believe in sparking imagination and joy through play. Curated for children of all ages, our selection blends timeless classics, innovative learning toys, and the latest trends - all prioritizing safety and quality.</span>

                    <span className='block'>Committed to sustainability, we offer eco-conscious options to nurture both young minds and our planet. Every toy is carefully chosen to inspire creativity, foster growth, and create cherished family moments.</span>

                    <span className='block'>Whether in-store or online, we're here to help you discover magic on every shelf. Let's play, learn, and dream together! 🚀🧸</span>
                </p>
            </div>

            <div className='order-1 md:order-2 flex justify-center items-center p-4'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDqhv_NUTQbJwhM_XBRRVXy0LAlsnPATGIw&s'
                    alt='Children playing with educational toys in a bright, cheerful environment'
                    className='rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full max-w-md h-96'
                />
            </div>
        </div>
    )
})

export default AboutUs
