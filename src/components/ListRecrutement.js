import React from 'react'
import './ListRecrutement.css'
import ItemRecrutement from './ItemRecrutement'
export default function ListRecrutement() {
  return (
    <div className='list-recrutement-cont'>
        <h2 className='title-list-recrutement-cont'>ANNONCES DE RECRUTEMENT</h2>
       <div className='all-list-rec'>
       <div className='con-list-recrutement-cont'>
            <ItemRecrutement />
            <ItemRecrutement />
            <ItemRecrutement />
            <ItemRecrutement />
        </div>
       </div>
    </div>
  )
}
