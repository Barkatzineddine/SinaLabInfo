import React, { useState,useEffect } from 'react'
import './Publications.css'
import Backpub from '../components/Backpub'
import Nav from '../components/Nav'
import Mainpubs from '../components/Mainpubs'
import Pubcon from '../components/Pubcon'
import Footer from '../components/Footer'
import { json } from 'react-router-dom'
export default function Publications() {


  
const [publi,setPubli] = useState(null);
const [lastpub,setLastpub] = useState([])
useEffect(() => {
  fetch('http://localhost:8000/api-pub')
    .then(response => response.json())
    .then(data => {
      
       
    setPubli(data)
    for(let pub of data.splice(8,data.length)){
      lastpub.push(pub)
    }
    setLastpub(lastpub)

    
    })
    .catch(error => console.error(error));

    
}, []);



console.log("lastpub",lastpub)
console.log("publi",publi)
return (
 
 
 /* <>
    {publi?
    publi.map((pub)=>{
      return(pub.content)
    }):<h2>Loading ...</h2>}
    </>*/
    
    <>
    <Nav />
    <Backpub name="Publications"/>

    <div className='Pubs'>
      {console.log(publi)}
       {publi && publi.length != 0   ?
       
(<>
       <div className='main-pubs'>
        
       <div className='meduim-pubs'>
           {publi[1] ?
           <>
          <div className='meduim-pub'>
               <img alt='' src={'http://'+publi[1].img}/>
               <h2>{publi[1].title}</h2>
               <p>{publi[1].content}</p>
           </div>
            </>:<></>}

           {publi[2]?
           <>
           <div className='meduim-pub'>
               <img alt='' src={'http://'+publi[2].img}/>
               <h2>{publi[2].title}</h2>
               <p>{publi[2].content} </p>
           </div>
           </>:<></>
           }

           
       </div>
       {publi[0]?
       <>
       <div className='big-pubs'>
           <img alt='' src={'http://'+publi[0].img}/>
           <h2>{publi[0].title}</h2>
           <p>{publi[0].content}</p>
       </div>
       </>:<></>
       }
 <div className='small-pubs'>
       {publi[3]?
       <>
      
           <div className='small-pub'>
               <h2>{publi[3].title}</h2>
               <p>{publi[3].content}</p>
           </div>
           </>:<></>
           }


           {publi[4]?
           <div className='small-pub'>
           <h2>{publi[4].title}</h2>
               <p>{publi[4].content}</p>
           </div>:<></>
           }
           {publi[5]?
           <div className='small-pub'>
           <h2>{publi[5].title}</h2>
            <p>{publi[5].content}</p>
           </div>:<></>
           }
          {publi[6]?
           <div className='small-pub'>
           <h2>{publi[6].title}</h2>
            <p>{publi[6].content}</p>
           </div>:<></>
           }

           {publi[7]?
            <div className='small-pub'>
           <h2>{publi[7].title}</h2>
               <p>{publi[7].content}</p>
           </div>:<></>
           }
       </div>
   </div>

   <h3 className='all-pubs'>TOUTES LES PUBLICATIONS</h3>
      <div className='con-all-pubs-con'>
      <div className='all-pubs-con'>
      </div>
      </div>

      {lastpub.map((pub)=>{
         console.log(pub.content)
      return(
       
      <>
        <Pubcon pub={pub} />    
      </>
      
      )
    })}
    <Footer />
    
</>)
    
      :<h2>searching for pubs ...</h2>}
    </div>
    </>
    
    
  )
}
