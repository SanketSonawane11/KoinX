import React from 'react'
import Navbar from './Components/Navbar'
import Chart from './Components/Chart'
import Path from './Components/Path'
import CTA from './Components/Cta'

function page() {
  return (
    <div className='main-body'>
      <Navbar />
      <div className='container mx-[50px] mt-[20px] flex flex-col gap-[20px] h-[5091px]'>
        <Path className='mx-[50px]' />
        <div className='inner-container'>
          <Chart />
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default page