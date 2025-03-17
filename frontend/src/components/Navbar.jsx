import React, { useState,useEffect,useCallback } from 'react'
import { Menu, X } from 'lucide-react'; // Import icons from react-lucide
// import { logo } from '../images/index'

const Navbar = ({ scrollToHero, scrollToFeaturedCategories, scrollToBestSellers, scrollToUSP, scrollToTestimonials,scrollToAboutUs,scrollToFooter }) => {
    const navItems = [
        { name: 'Home', scrollTo: scrollToHero },
        { name: 'Categories', scrollTo: scrollToFeaturedCategories },
        { name: 'Products', scrollTo: scrollToBestSellers },
        { name: 'USP', scrollTo: scrollToUSP },
        { name: "Testimonials", scrollTo: scrollToTestimonials},
        { name: "About Us", scrollTo: scrollToAboutUs},
        { name: "Footer", scrollTo: scrollToFooter},
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(64); // Default height based on h-16 (4rem)

     // Get navbar height after initial render
     useEffect(() => {
        const navbar = document.querySelector('nav');
        if (navbar) setNavHeight(navbar.offsetHeight);
    }, []);

    const scrollToSection = useCallback((ref) => {
        console.log('Scrolling to:', ref);
        setIsMenuOpen(false);
    
        requestAnimationFrame(() => {
            setTimeout(() => {
                console.log('Current ref:', ref?.current);
                if (ref?.current) {
                    const navbar = document.querySelector('nav');
                    const currentNavHeight = navbar?.offsetHeight || navHeight;
                    console.log('Nav height:', currentNavHeight);
                    console.log('Section position:', ref.current.offsetTop);
                    
                    window.scrollTo({
                        top: ref.current.offsetTop - currentNavHeight,
                        behavior: "smooth",
                    });

                    // ref.current?.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);
        });
    }, [navHeight]);


    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href='/' className='flex items-center'>
                            {/* <img src={logo} alt='Divine-Energies-logo' className='w-12 h-12 md:w-14 md:h-14 rounded-full' /> */}
                            <span className="ml-2 text-xl font-bold text-gray-900 ">ShreeG</span>
                        </a>
                    </div>

                    <ul className="hidden md:flex space-x-12">
                        {navItems.map((item) => (
                            <li>
                                <button onClick={() => scrollToSection(item.scrollTo)} className="text-gray-600 font-bold text-sm lg:text-base hover:text-pink-600 transition-all duration-500"
                                >{item.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-pink-600 focus:outline-none"
                        >                                   
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Use react-lucide icons */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 bg-pink-600">
                        {navItems.map((item) => (
                            <button className="block w-full text-left px-3 py-2 border-b text-base font-medium text-white"
                                key={item.name}
                                onClick={() => scrollToSection(item.scrollTo)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar


// bg-gradient-to-br from-gray-900 to-blue-900 text-white text-gray-700 hover:bg-gray-200