import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'

function signin() {
  return (
    <div class="container flex">
    <div class="facebook-page flex">
        
        <div class="text">
            <h1>Coffee.</h1>
            <p>Find the right coffee</p>
            <p>for you.</p>
        
        </div>
            

            <form>
                
                <input type="email" placeholder="Enter Your Email" />
                <input type="password" placeholder="password" required />
                
                <div class="link">
                    <button type="submit" class="log-in">Login</button>
                     <Link to = {'/forgot'}class="forgot"> forgot password? </Link>
                </div>
                
                <div class="button">
  
                </div>
            </form>
     </div>
    
</div>
  )
}

export default signin
