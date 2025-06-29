import React from 'react'

// Importing Components
// Importing components
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// Importing Pages
import Highlights from "./Highlights";
import Careers from './Careers';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
    {/* Main content of the Home page */}
    <div><Highlights /></div>
    {/* Careers */}
    <Careers />
    <About />
    <Services />
    <Testimonials />
    <Contact />
    </>
  )
}

export default Home