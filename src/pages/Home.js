import React from 'react'
import Back from '../components/Back'
import Circles from '../components/Circles'
import Conseil from '../components/Conseil'
import Espaceanalyses from '../components/Espaceanalyses'
import Espacepatient from '../components/Espacepatient'
import Espacepublication from '../components/Espacepublication'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Resarvation from '../components/Resarvation'

export default function Home() {
  return (
    <div className='home'>
      <Nav />
      <Back />
      <Circles />
      <Espacepatient  name="Espace patient" id="contianer-patient"/>
      <Resarvation />
      <Espacepatient name="Espace Prefessional" id="contianer-professional"/>
      <Espaceanalyses />
      <Espacepublication />
      <Conseil />
      <Footer />
    </div>
  )
}
