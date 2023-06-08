import React from "react";
import "./Footer.css";
import insta from '../images/insta.svg'
export default function Footer() {
  return (
    <div className="container-footer">
      <div className="content">
        <div className="image-box">
          <div>
           
            <h3>CONTACT US</h3>
            <p>+012 345 6789</p>
            <p>lam_ibnsina@yahou.fr</p>
          </div>
          <div>
            <h3>FIND US</h3>
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <h3>ALSO you can find us here !</h3>
          <div className="social-link">
            <a><img alt="" src={insta} /></a>
            <a><img alt="" src={insta} /></a>
            <a><img alt="" src={insta} /></a>
           
          </div>
        </div>
        <form action="http://localhost:8000/feedBack" method="POST">
         
          <div className="input-box">
            <input type="text" required placeholder="Enter your name" name="name"></input>
          </div>
          <div className="input-box">
            <input type="email" required placeholder="Enter your email" name="email"></input>
            
          </div>
          <div className="message-box">
            
            <textarea name="message" id="" placeholder="Message"></textarea>
          </div>
          <div className="button-box">
            <button type="submit" value="Send Message">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
