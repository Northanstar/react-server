import React from 'react'
import './Sign_up.css'
import { Link } from 'react-router-dom';

function Sign_up() {
  return (
    <div class="container flex">
    <div class="facebook-page flex">
        
        <div class="text">
            <h1>Coffee.</h1>
            <p>Find the right coffee</p>
            <p>for you.</p>
        
        </div>
            

            <form>
                <input type="username" placeholder='Enter your username' />
                <input type="email" placeholder="Enter Your Email" />
                <input type="password" placeholder="password" required />
                <input type="password" placeholder="Confirm password" required />
                <div class="link">
                    <button type="submit" class="log-in">Sign Up</button>
                </div>
                <hr />
                <div class="button">
                <Link to = {'/sign_in'} className="forgot"> Alreday have an account? </Link>
                </div>
            </form>
     </div>
    
</div>
  )
}

export default Sign_up
