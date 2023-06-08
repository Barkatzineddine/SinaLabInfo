import React from 'react'
import AOS from 'aos'
import Pub from './Pub'
import './Espacepublication.css'
import { useEffect,useState } from 'react'
export default function Espacepublication() {

const [publi,setPubli] = useState([]);

var i=0;
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'linear',
      delay: 150,
      
    });



  fetch('http://localhost:8000/api-pub')
    .then(response => response.json())
    .then(data => {
      
       
    setPubli(data)
 
    })
    .catch(error => console.error(error));

  }, []);


  return (
    <div className='pub-cont'>
        <h1 className='espace-pub-title'>PUBLICATIONS</h1>
            <div className='grid-pub'>
        <div data-aos="fade-down-right" className='pub-column'>

          {publi[0]?
          <Pub pub={publi[0]}/>:<></>
          }
          {publi[2]?
          <Pub pub={publi[2]}/>:<></>
          }
          {publi[4]?
          <Pub pub={publi[4]}/>:<></>
          }
         
</div>
        <div data-aos="fade-down-left" className='pub-column'>
        {publi[1]?
          <Pub pub={publi[1]}/>:<></>
          }
          {publi[3]?
          <Pub pub={publi[3]}/>:<></>
          }
          {publi[5]?
          <Pub pub={publi[5]}/>:<></>
          }
         
        </div>
      
    </div>
    </div>

  )
}
