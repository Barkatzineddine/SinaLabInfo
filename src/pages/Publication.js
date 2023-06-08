import React ,{ useState,useEffect }  from "react";
import Backpub from "../components/Backpub";
import Nav from "../components/Nav";
import "./Publication.css";
import "../components/Mainpubs.css";
import meduim from "../images/meduimpub.svg";
import con1 from "../images/connaitre1.svg";
import Footer from "../components/Footer";
export default function Publication() {


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
  
      
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/api-pub/`)
      .then(response => response.json())
      .then(data => {
        
         
      setPublications(data)
      
      })
      .catch(error => console.error(error));
  
      
  }, []);

  console.log("publi :",publi)
  



  return (

    

    <div className="pubs">
      <Nav />
      <Backpub name="Publication" />

      {publi?
      <div className="pub-con-all">
        <div className="left-pub-con">
          <h2>
           {publi.title}
          </h2>
         
          <p className="auteur-into"> Bienvenue dans notre espace de publication</p>
          <div className="meduim-part1">
            
            <div>
              <p>
              {publi.content}
              </p>
            </div>
          </div>
          <img alt="" src={'http://'+publi.img} className="pub-img2" />
          <p className="pub-text2">
           {publi.description}
          </p>
        </div>
        <div className="right-pub-con">
          <div className="meduim-pubs">
          
          
          
          
          </div>
        </div>
      </div>:<></>}
      <Footer />
    </div>
  );
}
