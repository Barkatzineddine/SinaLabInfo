import React from 'react'
import Nav from '../components/Nav'
import Backfaq from '../components/Backfaq'
import Accordion from '../components/Accordion'

export default function Offre() {
  return (
    <div className="Offre-page">
        <Nav />
        <Backfaq name="Les Offres"/>
        <Accordion/>
    </div>
  )
}
