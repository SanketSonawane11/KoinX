'use client'

import React, { useState } from 'react'

function FaqOne({heading, content}) {

    const [down, setDown] = useState(true);

    const toggleStateOne = ()=>{
        setDown(!down);
    }

    return (
        <div>
            <h2 onClick={toggleStateOne}>{heading}</h2>
            <p className='first' style={
                { display: down === true && "none" }
            }>{content} </p>
        </div>
    )
}

export default FaqOne