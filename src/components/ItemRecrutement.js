import React from 'react'
import './ItemRecrutement.css'
import logo from "../images/logowithouttitle.svg"
export default function ItemRecrutement() {
  return (
    <div className='recrutemet-item-con'>
        <div><img alt='' src={logo}/></div>
        <div><p>Infirmier </p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum . </p></div>
        <div><a href='/RecrutementForm'><button>POSTULER</button></a></div>
    </div>
  )
}
