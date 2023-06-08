import React from 'react'
import './Pub.css'
export default function Pub({pub}) {
  return (
    <div className='pub-box'>
      <h3 className='pub-title'>{pub.title}</h3>
      <p className='pub-txt'>{pub.content} </p>
      <a  style={{textDecoration:"underline"}} href={`/publication?id=${pub._id}`}>Lire plus</a>
    </div>
  )
}
