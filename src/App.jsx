import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero';
import About from './About';
import Product from './Pages/Product';
import Testimonial from './Pages/Testimonial';
import Contacts from './Pages/Contacts';
import SignUp from './Pages/Sign_up';
import SignIn from './Pages/Sign_in';


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
        <Route path="/sign_up" element={<SignUp/>} />
        <Route path="/sign_in" element={<SignIn/>} />
      </Routes>

      
    </div>
  )
}

export default App