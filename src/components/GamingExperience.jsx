import React from 'react'
import Commonbtn from './Commonbtn'

const GamingExperience = () => {
    return (
        <div className='gaming d-flex justify-content-end align-items-center'>
            <div className="container">
                <div className="gaming-card ms-auto">
                    <h2 className='text-white fw-bold fs-xl1'>Level up your gaming experience</h2>
                    <Commonbtn text='Play Unvilled' custm='py-3 px-32' />
                </div>
            </div>
        </div>
    )
}

export default GamingExperience
