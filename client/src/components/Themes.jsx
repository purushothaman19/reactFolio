import React from "react";
import Footers from "./footer";
import CopyrightsText from "./copyrights";
// import TypeCard from "./types";

function ThemesPage() {

  const imageUrl = "data:image/png;base64,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"

  return (
    <div>
      <div className="container-fluid">

        <section className="top-themes">
          <h1 style={{ "color": "black" }}>Themes</h1>
        </section>

        <section className="middle-themes">

          <div id="root">

          </div>

          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-6 themes-img big-img">
              <img className="python-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="work1" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 themes-text" id="python-text">
              <div>
                <h2 style={{ "color": "#366E9D" }}> <img className="python-img small-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="work1" />  Python</h2>
                <p style={{ "marginTop": "10%", "textAlign": "justify" }}>The compilation of well worked and processed Python programes live here!</p>
              </div>
              <a href="/projects?tag=python"><button style={{ "float": "right", "margin": "5% 7%" }} className="btn btn-outline-warning" type="button" name="button">Peek Projects</button></a>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 themes-text" id="flutter-text">
              <div>
                <h2 style={{ "color": "#0051a0" }}> <img className="flutter-img small-img" style={{ "marginTop": "0" }} src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" alt="work1" />
                  Flutter</h2>
                <p style={{ "marginTop": "10%", "textAlign": "justify" }}>The compilation of well worked and processed Flutter programes live here!</p>
              </div>
              <a href="/projects?tag=flutter"><button style={{ "float": "left", "margin": "5% auto" }} className="btn btn-outline-primary" type="button" name="button">Peek Projects</button></a>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 themes-img big-img">
              <img className="flutter-img" style={{ "marginTop": "0" }} src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" alt="work1" />
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6 themes-img  big-img">
              <img className="html-img" src="https://user-images.githubusercontent.com/5307958/38454395-eba34a8a-3a90-11e8-9c95-680a7aea037f.png" alt="work1" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 themes-text" id="html-text">
              <div>
                <h2 style={{ "color": "#000" }}>  <img className="html-img small-img" src="https://user-images.githubusercontent.com/5307958/38454395-eba34a8a-3a90-11e8-9c95-680a7aea037f.png" alt="work1" />
                  THREE JS</h2>
                <p style={{ "marginTop": "10%", "textAlign": "justify" }}>The compilation of well worked and processed Three Js programes live here!</p>
              </div> <p style={{ "color" : "red", "textAlign": "center" }}> ----- UNDER DEVELOPMENT ----- </p>
              <a href="/projects?tag=html"> <button style={{ "float": "right", "margin": "5% 7%", "pointerEvents": "none", "cursor": "default" }} className="btn btn-outline-dark" type="button" name="button">Peek Projects</button></a>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6 themes-text" id="flutter-text">
              <div>
                <h2 style={{ "color": "#F7E04B" }}> <img className="js-img small-img" src={imageUrl} alt="work1" /> javaScript</h2>
                <p style={{ "marginTop": "10%", "textAlign": "justify" }}>The compilation of well worked and processed javaScript including Node and React programes live here!</p>
              </div> <p style={{ "color" : "red", "textAlign": "center" }}> ----- UNDER DEVELOPMENT ----- </p>
              <a href="/projects?tag=js"><button style={{ "float": "left", "margin": "5% auto",  "pointerEvents": "none", "cursor": "default" }} className="btn btn-outline-dark" type="button" name="button">Peek Projects</button></a>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 themes-img big-img">
              <img className="js-img" src={imageUrl} alt="work1" />
            </div>


          </div>

        </section>
      </div>
      <CopyrightsText/>
      <Footers></Footers>
    </div>
  );
};
export default ThemesPage;