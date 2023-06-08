import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import './Espacepatient.css'
import Patient from '../images/Patient.svg'
export default function Espacepatient({name,id}) {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      delay: 50,
      
    });
  }, []);
  return (
    <div className='contianer-patient' id={id}>
      
      <div className='container-pa'>
      <h1 className='title-patient'>{name}</h1>
      <div className='cont-pa'>
        <div
        data-aos="fade-down-right"
        >
            <img alt='' src={Patient} className="image-pa"/>
        </div>
        <div 
        className='text-pa'
        data-aos="fade-left"
        >
            <p className='par-pa'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className='btn-cont'>
               <a href="/catalogue"> <button>Catalogue des analyses</button></a>
                <span>
                   <a href="/faq"> <button className='faq-btn'>FAQ</button></a>
                    <a href='http://localhost:8000/'><button className='res-btn'>Resultats</button></a>
                </span>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
