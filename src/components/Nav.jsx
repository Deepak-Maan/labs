import React from 'react'
import pageLogo from '../assets/images/svg/page-logo.svg'
import Commonbtn from './Commonbtn'
const Nav = () => {
    return (
        <div>
            <nav className="container d-flex justify-content-between align-items-center py-4">
                <a href="#" rel='noreffrer'><img src={pageLogo} alt="pageLogo" /></a>
                <ul className='d-flex p-0 gap-4 align-items-center mb-0'>
                    <li><a href="" className=' text-lightwhite fw-normal fs-sm'>About Us</a></li>
                    <li><a href="" className=' text-lightwhite fw-normal fs-sm'>Our Team</a></li>
                    <li><a href="" className=' text-lightwhite fw-normal fs-sm'>Roadmap</a></li>
                    <li><Commonbtn text='Contact Us' custm='py-12 px-32 ms-5' /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
