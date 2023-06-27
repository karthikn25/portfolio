import React from 'react';
import Topbar from '../Components/Topbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Work from '../Components/Work';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';


export default function Base() {
  return (
    <div className='base-design'>
    <Topbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
  )
}
