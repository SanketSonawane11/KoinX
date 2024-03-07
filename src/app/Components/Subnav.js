'use client'

import React, { useState } from 'react';

function Subnav() {
    const [activeItem, setActiveItem] = useState('Sentiment');

    const handleItemClick = (item) => {
        setActiveItem(item); 
    };

    return (
        <div className='subnav-main'>
            <ul className='flex gap-[35px]'>
                <li className={activeItem === 'Overview' ? 'active' : ''} onClick={() => handleItemClick('Overview')}>Overview</li>
                <li className={activeItem === 'Fundamentals' ? 'active' : ''} onClick={() => handleItemClick('Fundamentals')}>Fundamentals</li>
                <li className={activeItem === 'News Insights' ? 'active' : ''} onClick={() => handleItemClick('News Insights')}>News Insights</li>
                <li className={activeItem === 'Sentiment' ? 'active' : ''} onClick={() => handleItemClick('Sentiment')}>Sentiment</li>
                <li className={activeItem === 'Team' ? 'active' : ''} onClick={() => handleItemClick('Team')}>Team</li>
                <li className={activeItem === 'Technicals' ? 'active' : ''} onClick={() => handleItemClick('Technicals')}>Technicals</li>
                <li className={activeItem === 'Tokenomics' ? 'active' : ''} onClick={() => handleItemClick('Tokenomics')}>Tokenomics</li>
            </ul>
        </div>
    );
}

export default Subnav;
