import React from 'react'
import heroTriangle from '../assets/images/png/hero-triangle.png'
const Hero = () => {
    return (
        <div className='container h-header d-flex flex-column justify-content-center position-relative'>
            <img className='hero-triangle' src={heroTriangle} alt="hero-triangle" />
            <h1 className='text-white fs-xxl fw-bold text-center'>Changing the way games <span className='d-block' >are made</span></h1>
            <p className='fs-lg1 fw-normal text-white  text-center'>Redefining the future of play</p>
        </div>
    )
}

export default Hero
