import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import About from './About';
import Product from './Product';
import Testimonial from './Testimonial';
import Contacts from './Contacts';


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/contact" element={<Contacts/>} />
      </Routes>

      
    </div>
  )
}

export default App