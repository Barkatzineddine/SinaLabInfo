import React from 'react'
import './Recrutement.css'
import Backpub from '../components/Backpub'
import Nav from '../components/Nav'
import ListRecrutement from '../components/ListRecrutement'
export default function Recrutement() {
  return (
    <div className='recrutement-page'>
        <Nav />
        <Backpub name={'AVIS DE RECRUTEMENTS '}/>
        <ListRecrutement />
    </div>
  )
}
