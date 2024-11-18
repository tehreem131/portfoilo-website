import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/profile_picture.png)] bg-blend-soft-light  bg-cover'
    style={{backgroundSize: "20%", backgroundPosition: "left 50px bottom 50px",}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p  data-aos="zoom-out-up">I&apos;m</p>
            <p  data-aos="zoom-out-up">Tehreem</p>
            <p  data-aos="zoom-out-up">Khanzada</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Hero
