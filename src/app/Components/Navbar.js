'use client'

import Link from 'next/link'
import React, { useState } from 'react'


function Navbar() {

    const menuClasses = 'menu-items';
    const innerMenuClasses = 'inner-menu';
    const getStartedClasses = 'get-started';

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        const menu = document.querySelector(`.${menuClasses}`);
        menu.classList.toggle('mobile-open');
    };

    return (
        <div className='nav-main'>
            <div className='logo'></div>
            <div className={menuClasses}>
                <ul className={innerMenuClasses}>
                    <li><Link href="#">Crypto Taxes</Link></li>
                    <li><Link href="#">Free Tools</Link></li>
                    <li><Link href="#">Resource Center</Link></li>
                </ul>
                <div className={getStartedClasses}>
                    <button className="w-[136px] h-[40px]">Get Started</button>
                </div>
                {/* Hamburger icon */}
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar