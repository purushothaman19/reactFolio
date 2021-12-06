import React from "react";
// import "./styles.css";
import Profile from "./ppppp.jpg"

function MiddleText() {

    const style = {
        "fontFamily": " 'Merriweather', 'serif' ",
         "fontWeight": "bolder", 
         "fontSize":  "2rem"
    }

    return (
        <div className="middle">

        <div className="container">
          <div className="row">
            <div id="p-img">

              <img src={Profile} alt="My Pic Goes Here!" />

            </div>
  
            <div id="p-text">
              <p style={style}>About</p>
  
              <div id="about-text">
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a document
                    or a typeface without relying on meaningful content. Lorem ipsum
                    may be used as a placeholder before final copy is available.</p>
              </div>
            </div>
  
            <a href="/contact"><button id="contact-btn" type="button" className="btn btn-dark">CONTACT</button></a>
  
          </div>
        </div>
      </div>
    );
}

export default MiddleText;