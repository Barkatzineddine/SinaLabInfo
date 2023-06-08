import React from 'react'
import './Backpub.css'
import './Backconnaitre.css'
export default function Backpub({name}) {
  return (
    <div className='backpub'>
        <div className='back-con-line1'></div>
        <h1 className='title-back-connaitre'>{name}</h1>
        <div className='back-con-line1'></div>
        </div>
  )
}
