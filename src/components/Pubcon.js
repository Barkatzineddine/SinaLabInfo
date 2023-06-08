import React from 'react'
import './Pubcon.css'
import meduim from '../images/meduimpub.svg'
export default function Pubcon({pub}) {
  return (
    <div className='pub-container-info'>
        <div className='img-pub-container-info'>
            <img alt='' src={pub.img?'http://'+pub.img:meduim}/>
        </div>
        <div className='text-pub-container-info'>
            <h3>{pub.title}</h3>
            <p>{pub.content}</p>
            <p>{pub.description}</p>
        </div>
    </div>
  )
}
