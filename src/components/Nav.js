import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll"
import "./Nav.css";
import drop from "../images/drop.svg";
import res from "../images/Res.svg";
import logo from "../images/logowithouttitle.svg"
export default function Nav() {
  const [open, Setopen] = useState(false);

  const [open3, Setopen3] = useState(false);
  const [open4, Setopen4] = useState(false);
  const [show,Setshow] = useState(false)
  const opened = () => {
    Setopen(!open);
    Setopen4(false);
    Setopen3(false);
  };

  const opened3 = () => {
    Setopen3(!open3);
    Setopen4(false);
    Setopen(false)
  };
  const opened4 = () => {
    Setopen4(!open4);
    Setopen3(false);
    Setopen(false)
  };
  const showed = () => {
    Setshow(!show);
  };
  return (
    <div className="nav">
      <div className="logo"><img alt="" src={logo} style={{width:"60px"}}/></div>
      <div className={show ? "slide-bar" : "left-nav"}>
        <div className="nav-link">
          <ul className="links">
            <li>
              <NavLink to="/" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a >Accueil</a></NavLink>
            </li>
            <li>
              <Link to="contianer-patient" span={true} smooth={true} duration={200} offset={-125} style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}>Patient</Link>
              <img src={drop} alt="" className={open ? "down-up" : "down"} onClick={opened} />
              <ul className={open ? show ? "": "droponeopen" : "dropone"}>
                <li>
                <NavLink to="/catalogue" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a >catalogue des analyses</a></NavLink>
                </li>
                <li>
                  <a href="http://localhost:8000/results" >Résultats des analyses</a>
                </li>
                <li>
                <NavLink to="/faq" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a >Faq</a></NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/resarvation" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a >Reservation</a></NavLink>
            </li>
            <li>
            <Link to="contianer-professional" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}} span={true} smooth={true} duration={200} offset={-125}>
              <a>Professionnel</a>
              </Link>
              <img src={drop} alt="" className={open3 ? "down-up" : "down"} onClick={opened3} />
              <ul className={open3 ? show? "" :"droponeopen3" : "dropone"}>
                <li>
                  <NavLink to="/catalogue" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a >catalogue des analyses</a></NavLink>
                </li>
                <li>
                  <a href="http://localhost:8000/results">Résultats des analyses</a>
                </li>
              </ul>
            </li>
           
            <li>
              <a >Annonces</a>
              <img src={drop} alt="" className={open4 ? "down-up" : "down"} onClick={opened4} />
              <ul className={open4 ? show? "" :"droponeopen4" : "dropone"}>
                <li>
                <NavLink to="/Offres" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a>Offres</a></NavLink>
                </li>
                <li>
                <NavLink to="/recrutement" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a>Demandes de recrutements</a></NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/publications" style={({ isActive}) =>{return isActive ? {color:"#3E8DA8"}: {color:"black"}}}><a >Publications</a></NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className="search-box">
              
           
          </div>
          
        </div>
      </div>
      <img alt="" className="slide" src={res} onClick={showed}/>
    </div>
  );
}
