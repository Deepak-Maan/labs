import React from 'react'
import pageLogo from '../assets/images/svg/page-logo.svg'
import Commonbtn from './Commonbtn'
import { useState } from 'react'
import { Navcross, Navline } from './Icons'
const Nav = () => {
    const [first, setfirst] = useState(false)
    function show() {
        setfirst(!first)
        if (first === false) {
            document.body.classList.add('overflow_hidden')
        }
        else {
            document.body.classList.remove('overflow_hidden')
        }
    }

    return (
        <div>
            <div className='container py-4'>
                <div className=' d-flex  align-items-center  justify-content-between '>
                    <a href=""><img src={pageLogo} alt="page-logo" /></a>
                    <div className="d-flex  align-items-center  mb-0  ps-0 gap-4 " >
                        <ul className={`${first ? "nav-true" : "nav-false"} d-flex align-items-center mb-0 ps-0 gap-4 mobile-view`}>
                            <li><a href="#aboutus" onClick={show} className=' text-lightwhite fw-normal fs-sm pagelinks position-relative '>About Us</a></li>
                            <li><a href="#team" onClick={show} className=' text-lightwhite fw-normal fs-sm pagelinks position-relative  '>Our Team</a></li>
                            <li><a href="#roadmap" onClick={show} className=' text-lightwhite fw-normal fs-sm pagelinks  position-relative '>Roadmap</a></li>
                            <li className=' ps-3 cursor-pointer d-block d-sm-none  d-lg-block'><Commonbtn text='Contact Us' custm='px-32 py-12' /></li>
                        </ul>
                        <button className=' ps-3 cursor-pointer d-none d-sm-block d-lg-none bg-transparent border-0 '><Commonbtn text='Contact Us' custm='px-32 py-12' /></button>
                    </div>
                    <span onClick={show} className=' d-block d-lg-none position-relative z-11'>{first === false ? <Navline /> : <Navcross />}</span>
                </div>
            </ div>
        </div >
    )
}

export default Nav
