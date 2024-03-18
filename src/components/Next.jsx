import React from 'react'
import Commonbtn from './Commonbtn'

const Next = () => {
    return (
        <div className='next-bg next-height d-flex align-items-center justify-content-center'>
            <div className="container">
                <h2 className='text-white fw-bold fs-xl1 text-center mb-0'>What’s Next</h2>
                <p className='text-center fw-semibold fs-sm text-white mb-0 pb-3'>92% of gamers have never even tried a Web3 game. We’re going to change that.</p>
                <p className='text-center fw-normal text-gray fs-sm mb-0 pb-4'> 248Labs The market is worth about a gazillion dollars, so whatever those stats were, that goes here.</p>
                <div className='d-flex justify-content-center'>
                    <Commonbtn text='Try to keep up' custm='py-3 px-41 mt-2' />
                </div>
            </div>
        </div>
    )
}

export default Next
