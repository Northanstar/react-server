import React from 'react'

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <a className="logo" href="#">Coffee<span>.</span></a>
        <ul className="menu-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
