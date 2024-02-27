import React from 'react'
import Navbar from './Components/Navbar'
import Chart from './Components/Chart'
import Path from './Components/Path'
import CTA from './Components/Cta'
import Subnav from './Components/Subnav'
import Sentiment from './Components/Sentiment'
import Aboutbitcoin from './Components/Aboutbitcoin'
import Trending from './Components/Trending'

function page() {
  return (
    <div className='main-body'>
      <Navbar />
      <div className='container mx-[50px] mt-[20px] flex flex-col gap-[20px]'>
        <Path className='mx-[50px]' />
        <div className='inner-container'>
          <div className='main-content w-[1040px] overflow-hidden'>
            <Chart />
            <Subnav />
            <Sentiment />
            <Aboutbitcoin />
          </div>
          <div className='side-content'>
            <CTA />
            <Trending />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page