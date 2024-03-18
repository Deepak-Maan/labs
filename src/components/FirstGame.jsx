import React from 'react'

const FirstGame = () => {
    const doers = [
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
    const Crdsdata = doers.map((doersdata, i) => (
        <div key={i} className='col-lg-4 '>
            <div className='doers-crd position-relative overflow-hidden  z-1  '>
                <h4 className=" m-0 text-white roboto-flex fs-lg1 pb-4 pb-97 fw-bold  ">{doersdata.heading}</h4>
                <p className='text-gray ff-roboto fs-sm fw-normal m-0 max-w-310 '>{doersdata.para}</p>
            </div>
        </div>
    ))
    return (
        <div className='pt-121 bg-black mt1 position-relative overflow-hidden z-1  '>
            <h1 className=' fs-xxl1 fw-bold roboto-flex position-absolute about-h text-white z-n1 '>About Us</h1>
            <div className='container'>
                <div className="row pb-114 ">
                    <div className="col-lg-6">
                        <div className=' d-flex mb-3'>
                            <p className='common-h-btns fw-bold roboto-flex fs-sm1 m-0 cbtn-p'>DOERS OVER TALKERS</p>
                        </div>
                        <h2 className='roboto-flex fw-bold fs-xl1 text-white max-w-310'>Game First.Always.</h2>
                    </div>
                    <div className='col-lg-6 pt-50 ps-lg-5 ps-3'>
                        <h4 className='roboto-flex fw-medium fs-md text-white m-0 mb-2 pb-1'>This is difficult</h4>
                        <p className=' m-0 fs-sm ff-roboto text-gray fw-normal max-w-512'>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold '>world-class storytelling,</span> world-building, game design, art and sound. And fun.</p>
                    </div>
                </div>
                <div className='row pb-131'>
                    {Crdsdata}
                </div>
            </div>
        </div>
    )
}

export default FirstGame