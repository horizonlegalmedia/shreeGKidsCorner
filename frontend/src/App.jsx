import React, { useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories";
import BestSellers from "./components/BestSellers";
import USP from "./components/USP";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  const heroRef = useRef(null);
  const featuredCategoriesRef=useRef(null)
  const bestSellersRef=useRef(null)
  const uspRef=useRef(null)
  const testimonialsRef=useRef(null)
  const aboutUsRef=useRef(null)
  const footerRef=useRef(null)

  return (
    <div>
      <Navbar
        scrollToHero={heroRef}
        scrollToFeaturedCategories={featuredCategoriesRef}
        scrollToBestSellers={bestSellersRef}
        scrollToUSP={uspRef}
        scrollToTestimonials={testimonialsRef}
        scrollToAboutUs={aboutUsRef}
        scrollToFooter={footerRef}
      />
      <Hero ref={heroRef}/>
      <FeaturedCategories ref={featuredCategoriesRef}/>
      <BestSellers ref={bestSellersRef} />
      <USP ref={uspRef} />
      <Testimonials ref={testimonialsRef} />
      <AboutUs ref={aboutUsRef} />
      <Footer ref={footerRef} />

    </div>
  )
}

export default App
