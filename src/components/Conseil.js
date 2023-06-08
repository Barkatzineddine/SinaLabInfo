import React from 'react'
import './Conseil.css'
import conseil from '../images/conseil.svg'
export default function Conseil() {
  return (
    <div className='conseil-con'>
      <h1 className='conseil-title'>CONSEIL DU JOUR</h1>
      <div className='conseil-box'>
      
        <div className='conseil-text'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
        </div>
        <div className='img-conseil'>
        <img alt='' src={conseil}/>
        </div>
      
      </div>
    </div>
  )
}
