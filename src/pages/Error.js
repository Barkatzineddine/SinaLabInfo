import React from 'react'
import './404.css'
import Nav from '../components/Nav'
import error from '../images/error.svg'
export default function Error() {
  return (
    <div className='Error-page'>
      <Nav />
      <div className='error-con'>
        <h2>Erreur 404</h2>
        <div>
        <img alt='' src={error}/>
        <img alt='' src={error}/>
        <img alt='' src={error}/>
        <img alt='' src={error}/>
        </div>
        
        <p>OUPS !!, la page que vous cherchez semble avoir été déplacée ou supprimée. Veuillez nous excuser pour la gêne occasionnée</p>
      </div>
    </div>
  )
}
