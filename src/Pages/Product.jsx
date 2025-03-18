import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

function Product() {
  return (
    <div className="card-list">
      <Link to="#" className="card-item">
        <img src="src/assets/coffee-hero-bg.jpg" alt="card image"/><br/>
        <span className="developer">Developer</span>
        <h3>A "developer" codes software and websites</h3>
        <div className="arrow">
          <i className="fas fa-arrow-right card-icon"></i>
        </div> <br />
      </Link>

   

            <Link to="#" class="card-item">
                <img src="src/assets/coffee-hero-bg.jpg" alt="card image"/><br/>
                <span class="designer">Designer</span>
                <h3>A "designer" is design expert</h3>
                <div class="arrow">
                    <i class="fas fa-arrow-right card-icon"></i>
                </div> <br/>
            </Link>

                <Link to ="#" class="card-item">
                    <img src="src/assets/coffee-hero-bg.jpg" alt="card image"/><br/>
                    <span class="editor">Editor</span>
                    <h3>An "editor" ensures content quality and accuracy</h3>
                    <div class="arrow">
                        <i class="fas fa-arrow-right card-icon"></i>
                    </div> <br/>
                </Link>
               
                    
      </div>
  )
}

export default Product
