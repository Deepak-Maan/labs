import React from 'react'
import RichWorldImg from '../assets/images/png/richWorld-img.png'
import { Video } from './Icons'
const RichWorld = () => {
    return (
        <div className='overflow-x-clip'>
            <div className="container py-sm-5">
                <h2 className='text-white fw-bold fs-xl1 text-center pb-4 pt-sm-5 mt-5'>A rich, inhabited, and licensable world.</h2>
                <div className="position-relative mt-3">
                    <div className="richworld-ellipse d-none d-lg-flex"></div>
                    <img className='w-100 position-relative z-3' src={RichWorldImg} alt="richWorld" />
                    <span className='rich-video'>
                        <Video />
                    </span>
                </div>
                <p className='fs-sm fw-normal text-gray text-center pt-4'> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but <span className="d-block">also for film and television, events, merchandising, and partnerships.</span></p>
            </div>
        </div>
    )
}

export default RichWorld
