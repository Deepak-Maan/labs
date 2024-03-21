import React from 'react'
import Logo from '../assets/images/svg/page-logo.svg'
const Preloader = () => {
    return (
        <div className=' min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center' >
            <div className="loader">
                <div className="square" ></div>
                <div className="square"></div>
                <div className="square last"></div>
                <div className="square clear"></div>
                <div className="square"></div>
                <div className="square last"></div>
                <div className="square clear"></div>
                <div className="square "></div>
                <div className="square last"></div>
            </div>
            <img className='mt-5' src={Logo} alt="logo" />
        </div>
    )
}

export default Preloader
