import React from 'react'

const FirstGame = () => {
    const gamedata = [
        {
            heading: "World Building",
            para: "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision",
        },
        {
            heading: "Game Design",
            para: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination."
        },
        {
            heading: "Art and Sound",
            para: "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down."
        },
    ]
    const gamecard = gamedata.map((carddata, i) => (
        <div key={i} className='col-lg-4 mb-5 mb-lg-0'>
            <div className='doers-crd position-relative overflow-hidden  z-1'>
                <h4 className=" m-0 text-white fs-xl pb-4  fw-bold  ">{carddata.heading}</h4>
                <p className='text-gray fs-sm fw-normal m-0 max-w-310 '>{carddata.para}</p>
            </div>
        </div>
    ))
    return (
        <div className='pt-121 position-relative overflow-x-clip z-1  '>
            <div className="firstgame-ellipse d-none d-lg-flex"></div>
            <h1 className=' fs-xxl1 fw-bold  position-absolute about-h text-white '>About Us</h1>
            <div className='container pb-sm-4'>
                <div className="row pb-sm-5 mb-5 ">
                    <div className="col-lg-6">
                        <div className=' d-flex mb-3'>
                            <p className='team_btn fw-bold fs-sm m-0 '>DOERS OVER TALKERS</p>
                        </div>
                        <h2 className=' fw-bold fs-xl1 text-white max-w-310'>Game First.Always.</h2>
                    </div>
                    <div className='col-lg-6 pt-sm-5 pt-3 ps-lg-5 ps-3'>
                        <h4 className=' fw-medium fs-md text-white m-0 mb-2 pb-1'>This is difficult</h4>
                        <p className=' m-0 fs-sm text-gray fw-normal max-w-512'>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold '>world-class storytelling,</span> world-building, game design, art and sound. And fun.</p>
                    </div>
                </div>
                <div className='row pb-sm-5 mb-5'>
                    {gamecard}
                </div>
            </div>
        </div>
    )
}

export default FirstGame