import React from 'react'
import MoveImg from '../assets/images/png/makemove-img.png'
import Commonbtn from './Commonbtn'
const MakeMove = () => {
    return (
        <div className='pt-sm-5 overflow-x-clip'>
            <div className='container position-relative d-flex flex-column align-items-center mt-sm-5 pt-5'>
                <div className="makemove-ellipse d-none d-lg-flex"></div>
                <img className='w-100 position-relative z-3' src={MoveImg} alt="moveimg" />
                <div className="row w-100 pt-4">
                    <div className="col-lg-4 order-2 order-lg-1 d-block">
                        <Commonbtn text='name@domain.com' custm='dominbtn py-3 px-32 mb-3' />
                        <Commonbtn text='Make Your Move' custm=' py-3 px-5 mt-4' />
                    </div>
                    <div className="col-lg-8 order-1 order-lg-2 ">
                        <p className='text-gray fs-sm fw-normal'>Unveiled is a unique <span className='fw-semibold text-white' >collectible card game</span> in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence</p>
                        <p className='text-gray fs-sm fw-normal'>You play <span className="text-white fw-semibold">a rogue merchant trader</span> allied to a noble house, alongside your <span className="text-white fw-semibold">cryptid-humanoid companions</span> in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers.</p>
                        <p className='text-white fs-sm fw-semibold'>What’s your next move?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeMove
