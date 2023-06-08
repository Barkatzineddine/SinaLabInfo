import React from 'react'
import { Link } from 'react-scroll'

import circle1 from '../images/backcircle1.svg'
import circle2 from '../images/backcircle2.svg'
import circle3 from '../images/backcircle3.svg'
import {motion} from 'framer-motion'
import Connaitre from '../pages/Connaitre'
export default function Circles() {
  return (
    <motion.div className='circles'
    
    animate={{y:0, opacity: 1}} 
        initial={{y:-700, opacity:.6}}
        transition={{delay:.5}}
    >
        <div className='blockcircle'>
        <Link  to="contianer-professional" span={true} smooth={true} duration={200} offset={-125}> <img alt='' src={circle1}/></Link>
        <p>PROFESSIONNEL</p>
        </div>
        <div className='blockcircle'>
        <Link  to="contianer-patient" span={true} smooth={true} duration={200} offset={-125}>
        <img alt='' src={circle2}/>
        </Link>
        <p>PATIENT</p>
        </div>
        <div className='blockcircle'>
        <a href="/connaitre">
        <img alt='' src={circle3}/>
        </a>
        <p>NOUS CONNAITRE</p>
        </div>
     
      </motion.div>
  )
}
