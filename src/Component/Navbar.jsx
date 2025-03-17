import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <a className="logo" href="#">Coffee<span>.</span></a>
        <ul className="menu-links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/products"><li>Products</li></Link>
          <Link to="/testimonial"><li>Testimonial</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
