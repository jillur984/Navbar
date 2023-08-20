import React from 'react'


const Hero = () => {
  return (
    <main>
    <div className='hero container'>
     <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST </h1>
        <p className='p-text'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='hero-btn'>
        <button>Shop Now</button>
        <button className='secondary-btn'>Category</button>
        
        </div>
        <div className='shopping'>
         <p>Also Avaiable on</p>
         <div className='brand-icons'>
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
         </div>
         </div>
     </div>

     <div className='hero-image'>
        <img src='/images/hero-image.png'></img>
     </div>

     </div>
    </main>
     
  )
}

export default Hero