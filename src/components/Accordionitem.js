import React,{useState} from 'react'
import './Accordion.css'
export default function Accordionitem({item,key}) {
    const [selected,Setselected] = useState(null)
   
    const toggle = (item) =>{
        if (selected) {
                selected.match = false
                Setselected(null)
                console.log("select")
        }else{
                item.match = true
                Setselected(item)
                console.log("dont")

            }
        
    }
  return (
    <div className="accordion-content" key={key}>
            <header>
                <span className="title">{item.question}</span>
                <button onClick={() =>toggle(item)}>{item.match ? '-' : '+'}</button>
            </header>

            <p className={item.match ?"open" : "description"}>
                {item.answer}
            </p>
        </div>
  )
}
