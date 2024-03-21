import React from 'react'
import Aradicous from '../assets/images/png/ardacious-img.png'
import Twitch from '../assets/images/png/twitch-img.png'
import Gameson from '../assets/images/png/gameson-img.png'
import Greython from '../assets/images/png/greythoren-img.png'
const Companies = () => {
    return (
        <div>
            <div className="container overflow-x-clip">
                <marquee>
                    <span className='d-flex align-items-end justify-content-center gap-5'>
                        <span><img src={Aradicous} alt="company-logo" /></span>
                        <span><img src={Twitch} alt="company-logo" /></span>
                        <span><img src={Gameson} alt="company-logo" /></span>
                        <span><img src={Greython} alt="company-logo" /></span>
                        <span><img src={Twitch} alt="company-logo" /></span>
                    </span>
                </marquee>
            </div>
        </div>
    )
}

export default Companies
