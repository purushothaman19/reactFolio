import React from "react";
import contactimg from "./contact-img.jpg";

import List from '@mui/material/List';
import Details from "./ListWorks";


function Contact() {

    const imgColor = {
        "WebkitFilter": "grayscale(100%)", /* Safari 6.0 - 9.0 */
        "filter": "grayscale(100%)",
        width: "60%",
        display: "block",
        "marginLeft": "auto",
        "marginRight": "auto",
        "pointerEvents": "none"
    }

    const cdetails = {
        "textAlign": "center"
    }

    return (
        <div className="container-fluid">
            <img src={contactimg} alt="" style={imgColor} />

            <div id="contactPage">

                <div style={cdetails}>
                    <h3 className="cName"> Purushothaman G </h3>
                    <p id="single-bio"> WEB | FLUTTER | PYTHON </p>
                </div>


                <div className="middleContact">

                    <div className="personal topic">
                        <div>
                            <h5> Personal </h5>
                        </div>

                        <List className="detailsList" sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>


                        <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                            <Details icon={<img src="https://img.icons8.com/cotton/90/000000/birthday.png" alt=""/>} title="16 March 2002" />
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                            <Details icon={<img src="https://img.icons8.com/external-justicon-lineal-color-justicon/90/000000/external-student-back-to-school-justicon-lineal-color-justicon.png" alt=""/>} title="Student" />
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                            <Details icon={<img src="https://img.icons8.com/fluency/90/000000/mail.png" alt=""/>} title="officialpurushothaman@gmail.com" />
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                            <Details icon={<img src="https://img.icons8.com/doodle/90/000000/phone.png" alt=""/>} title="+91 9976576720" />
                        </div>

                        </List>
                    </div>

                    <div className="social topic">
                        <div>
                            <h5> Social </h5>
                        </div>

                        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>

                            <div className="detailsA">

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                    <Details icon={<img src="https://img.icons8.com/nolan/90/git.png" alt=""/>} title={<a className="detailsList" href='https://github.com/purushothaman19'>Github</a>} />
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                    <Details icon={<img src="https://img.icons8.com/fluency/90/000000/mail.png" alt=""/>} title={<a className="detailsList" href="mailto:officialpurushothaman@gmail.com">Mail</a>} />
                                </div>
                            </div>

                        </List>
                    </div>

                    <div className="programme topic">
                        <div>
                            <h5> Language </h5>
                        </div>

                        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>


                        <div className="row container-fluid">
                        
                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img className="icons8" src="https://img.icons8.com/color/90/000000/python--v1.png" alt=""/>} title="Python" level="****"/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img className="icons8" src="https://img.icons8.com/color/90/000000/flutter.png" alt=""/>} title="Flutter[Dart]" level="****"/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img className="icons8" src="https://img.icons8.com/color/90/000000/nodejs.png" alt=""/>} title="Node Js" level="****"/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img className="icons8" src="https://img.icons8.com/officel/90/000000/react.png" alt=""/>} title="React Js" level="***"/>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img src="https://img.icons8.com/color/90/000000/c-programming.png" alt=""/>} title="C" level="***"/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img className="icons8" src="https://img.icons8.com/ios-filled/90/000000/c-plus-plus-logo.png" alt=""/>} title="C++" level="***"/>
                                </div>
                              
                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img className="icons8" src="https://img.icons8.com/dusk/90/000000/html-5.png" alt=""/>} title="HTML" level="****"/>
                                </div>
                              
                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img className="icons8" src="https://img.icons8.com/dusk/90/000000/css3.png" alt=""/>} title="CSS" level="****"/>
                                </div>
                    
                        </div>

                        </List>
                    </div>


                    <div className="Skills topic">
                        <div>
                            <h5> Skills </h5>
                        </div>

                        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>


                        <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img src="https://img.icons8.com/color/90/000000/adobe-illustrator--v2.png" alt="illustrator"/>} title="Illustrator" level="****"/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img src="https://img.icons8.com/doodle/90/000000/canva.png" alt="canva"/>} title="Canava" level="*****"/>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img src="https://img.icons8.com/nolan/90/adobe-spark.png" alt="spark"/>} title="Spark Post" level="*****"/>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 details-li" >
                                <Details icon={<img src="https://img.icons8.com/plasticine/90/000000/final-cut-pro-x.png" alt="final Cut Pro"/>} title="Final Cut Pro" level="**"/>
                                </div>

                                
                        </div>

                        </List>
                    </div>

                </div>

            </div>

        </div>
    )


}

export default Contact;