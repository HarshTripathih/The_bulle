import React from 'react'
import './Home.css'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'



function Home() {
  return (
    <div>
      <div className='section1'>
        <Section1 />
      </div>
      <div className='section2'>
        <Section2 />
      </div>
      <div className='section3'>
        <Section3 />
      </div>
      <div className='section4'>
        <Section4 />
      </div>


    </div>
  )
}

export default Home