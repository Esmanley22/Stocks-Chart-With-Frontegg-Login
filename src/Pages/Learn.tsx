import React from 'react'
import InfoTabs from '../components/InfoTabs'
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


function Learn() {
  return (
    <div className='bg'>
        <Header/>
        <div className='bg-light text-center pt-4 pb-2'>
            <h5>Explore facinating information about candlestick charts with these resources!</h5>
        </div>
        <div className='pt-5'>
        <InfoTabs />
        </div>
        <div className='fixed-bottom'>
          <Footer/>
        </div>
    </div>
  )
}

export default Learn
