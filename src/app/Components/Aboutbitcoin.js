'use client'

import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import FaqOne from './FaqOne';
import Head from 'next/head';
// import { CiCircleChevDown } from "react-icons/ci";


function Aboutbitcoin() {

    const [down, setDown] = useState(false);
    const [downtwo, setDowntwo] = useState(false);

    const toggleStateOne = () => {
        setDown(!down);
    }

    const Heading =
        [
            {
                heading: "What is Bitcoin?",
                content: "JFSnc jdsxf"
            },
            {
                heading: "What is Sitcoin?",
                content: "JFSdsal.zm,"
            }
        ]

    return (
        <div className='about'>
            <div className='about-inner'>
                <h1 className='font-semibold text-[24px] mb-[20px]'>
                    About Bitcoin </h1>
                {Heading.map((ques, index) => (
                    <div key={index}>
                        <FaqOne heading={ques.heading} content={ques.content} />
                        <hr />
                    </div>
                ))}

                <hr />
                <div className='holding'>
                    <h1 className='font-semibold text-[24px] mb-[20px]'>
                        Already Holding Bitcoin?
                    </h1>
                    <div className='horizontal-action lg:mb-[50px]'>
                        <div className='horizontal-card one'>
                            <img src='/one.png'></img>
                            <div className='content'>
                                <h2>Calculate your Profits</h2>
                                <button className='already-button'>
                                    Check Now <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                        <div className='horizontal-card two'>
                            <img src='/two.png'></img>
                            <div className='content'>
                                <h2>Calculate your tax liability</h2>
                                <button className='already-button'>
                                    Check Now <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutbitcoin