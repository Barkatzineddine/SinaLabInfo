import React from "react";
import Backpub from "../components/Backpub";
import Nav from "../components/Nav";
import "./Publication.css";
import "../components/Mainpubs.css";
import meduim from "../images/meduimpub.svg";
import con1 from "../images/connaitre1.svg";
import Footer from "../components/Footer";
import { useEffect,useState } from "react";
export default function PublicationTest() {

  const [publi,setPubli] = useState(null);
  const [publications,setPublications] = useState(null);
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id")
  console.log("id :",id)
  
  useEffect(() => {
    fetch(`http://localhost:8000/api-pub/${id}`)
      .then(response => response.json())
      .then(data => {
        
         
      setPubli(data)
      
      })
      .catch(error => console.error(error));

      fetch(`http://localhost:8000/api-pub`)
      .then(response => response.json())
      .then(data => {
        
         
      setPublications(data)
      
      })
      .catch(error => console.error(error));
  
      
  }, []);

 


  return (
    <div className="pubs">
      <Nav />
      <Backpub name="Publication" />
      <div className="pub-con-all">
        <div className="left-pub-con">
          <h2>
           {publi?publi.title:""}
          </h2>
          <p className="phrase-into">
            une phrase indroductive je ne sais pas frere{" "}
          </p>
          {publi?
    
          <div className="meduim-part1">
            <img alt="" src={meduim }/>
            <div>
              <p>
           {publi.content}
              </p>
            </div>
          </div>:<></>}

          {publi?<>
          <img alt="" src={"http://" + publi.img} className="pub-img2" />
          <p className="pub-text2">
           {publi.description}
          </p>
          </>:<></>}
        </div>
        <div className="right-pub-con">
          <div className="meduim-pubs">
            {publications?
            <>
            <div className="meduim-pub">
              {publications[0]?
              <>
              <img alt="" src={"http://"+publications[0].img} />
              <h2>
               {publications[0].title}
              </h2>
             
              <p>{publications[0].content}</p> 
              </>:<></>}
            </div>
            <div className="meduim-pub">
            {publications[1]?
              <>
              <img alt="" src={"http://"+publications[1].img} />
              <h2>
               {publications[1].title}
              </h2>
             
              <p>{publications[1].content}</p> 
              </>:<></>}
            </div>
            <div className="meduim-pub">
            {publications[2]?
              <>
              <img alt="" src={"http://"+publications[2].img} />
              <h2>
               {publications[2].title}
              </h2>
             
              <p>{publications[2].content}</p> 
              </>:<></>}
            </div>
            <div className="meduim-pub">
            {publications[3]?
              <>
              <img alt="" src={"http://"+publications[3].img} />
              <h2>
               {publications[3].title}
              </h2>
             
              <p>{publications[3].content}</p> 
              </>:<></>}
            </div>
            </>
            :<>downloading ...</>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
