import React from 'react'

const Commonbtn = (props) => {
    return (
        <div>
            <button className={`bg-button text-white rounded-pill fw-bold border-0  ${props.custm}`}>{props.text}</button>
        </div>
    )
}

export default Commonbtn
