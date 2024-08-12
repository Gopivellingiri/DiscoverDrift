
import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Places from './components/Places/Places'
import Tours from './components/Tours/Tours'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Topbar from './components/Topbar/Topbar'

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div>
      {isLargeScreen ?  <Topbar isScrolled={isScrolled}/> : <Navbar isScrolled={isScrolled}/>}
      
      <Hero/>
      <About/>
      <Places/>
      <Tours/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App