import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='container'>
            <div className='logo'>
         <img src='/images/brand_logo.png'/>
            </div>
            <div className='nav-main'>
              <ul>
                <li href="" >Menu</li>
                <li href="#">Home</li>
                <li href="#">Contact</li>
                <li href="#">Page</li>
              </ul>
            </div>
            <button>Login</button>
        </nav>
    </div>
  )
}

export default Navbar