import React from "react";
import "./ResarvationPage.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function ResarvationPage() {
  return (
    <div className="res-page-con">
      <Nav />
      <h2 className="title-res-page-con">RESERVATION</h2>
      <div className="con-res-con">
        <div>
          <h3> PRENEZ RENDEZ-VOUS </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essenti
          </p>
        </div>
        <div>
        <form action="http://localhost:8000/reservation" className="form-res" method="POST">
         
         <div className="input-box-res">
           <input type="text" required placeholder="Enter your name" name="name"></input>
         </div>
         <div className="input-box-res">
           <input type="email" required placeholder="Enter your email" name="email"></input>
        </div>
        <div className="input-box-res">
           <input type="text" required placeholder="Enter your adresse" name="adresse"></input>
        </div>
        <div className="input-box-res">
           <input type="number" required placeholder="Enter your phone" name="phone"></input>
        </div>

        <button type="submit" value="Send Message" className="btn-res-con">submit</button>
         
        
       </form>
       
        </div>
      </div>
      <Footer />
    </div>
  );
}
