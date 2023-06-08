import React from 'react'
import './Resarvation.css'
export default function Resarvation() {
  return (
    <div >
        <div className='reserve-container'>
            <h1 className='title-reserve'>Resarvation</h1>
        </div>
        <div className='reserve-cont'>
            <div data-aos="fade-right" className='reserve-box'>
                <h2 className='covid-txt'>COVID-19</h2>
                <p className='txt-covid'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining </p>
                <a href='/resarvation'><button className='reserve-btn'>Reserver</button></a>
            </div>
            <div data-aos="fade-left" className='reserve-box'>
                <h2 className='covid-txt'>COVID-19</h2>
                <p className='txt-covid'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining </p>
                <a href='/resarvation'><button className='reserve-btn'>Reserver</button></a>
            </div>
            
        </div>
      
    </div>
  )
}
