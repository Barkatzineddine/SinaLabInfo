import React from 'react'
import Nav from '../components/Nav'
import Accordion from '../components/Accordion'
import './Faq.css'
import Backfaq from '../components/Backfaq'
export default function Faq() {
  return (
    <div className='faq'>
     <Nav />
     <Backfaq name="Questions fréquemment posées"/>
      <Accordion />
      <Accordion />
    </div>
  )
}
