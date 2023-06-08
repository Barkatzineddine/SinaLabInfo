import React from 'react'
import './Mainpubs.css'
import meduim from '../images/meduimpub.svg'
import big from '../images/bigpub.svg'
export default function Mainpubs() {
  return (
    <div className='main-pubs'>
        <div className='meduim-pubs'>
            <div className='meduim-pub'>
                <img alt='' src={meduim}/>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
                <p>orem Ipsum is simply dummy text o. </p>
            </div>
            <div className='meduim-pub'>
                <img alt='' src={meduim}/>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
                <p>orem Ipsum is simply dummy text o. </p>
            </div>
        </div>
        <div className='big-pubs'>
            <img alt='' src={big}/>
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
            <p>orem Ipsum is simply dummy text o. orem Ipsum is simply dummy text o. orem Ipsum is simply dummy text o. orem Ipsum is simply dummy text o. vorem Ipsum is simply dummy . orem Ipsum is simply dummy text o. orem Ipsum is simply dummy text o. orem Ipsum is simply dummy text o. orem Ipsum is simply dummy text o. vorem Ipsum is simply dummy .orem Ipsum is simply dummy text o.</p>
        </div>
        <div className='small-pubs'>
            <div className='small-pub'>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
                <p>Lorem Ipsum is simply dummy text o. </p>
            </div>
            <div className='small-pub'>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
                <p>Lorem Ipsum is simply dummy text o. </p>
            </div>
            <div className='small-pub'>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
                <p>Lorem Ipsum is simply dummy text o. </p>
            </div>
            <div className='small-pub'>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
                <p>Lorem Ipsum is simply dummy text o. </p>
            </div>
            <div className='small-pub'>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting ?</h2>
                <p>Lorem Ipsum is simply dummy text o. </p>
            </div>
        </div>
    </div>
  )
}
