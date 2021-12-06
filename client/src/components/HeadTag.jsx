import React from "react";
// import AddIcon from '@mui/icons-material/Add';
// import { checkPassword } from "./sweetAlert";
// import Button from '@mui/material/Button';

function HeadTag(props) {

    // const multiColorText = {
    //         "background-image": "linear-gradient(to right, SlateBlue, grey, green)",
    //         "-webkit-background-clip": "text",
    //         "-moz-background-clip": "text",
    //         "background-clip": "text",
    //         "color": "transparent"
    // }

        const style = {
            "textAlign": "left",
            "paddingTop": "4%",
        };

        const contentStyle = {
            "width": "80%",
            "position": "relative"
        }

        const H2Style = {
            "position": "relative",
            "fontFamily": "'Righteous', cursive"
        }

        let tag

        if (props.Tag === "ds") {
            tag = "Data Science"
        } else {
            tag = props.Tag
        }

        return (
            <div>

                <div className="top-down">

                    <nav className="navbar navbar-expand-lg" id="top-navbar" style={style}>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div style={contentStyle}>
                                <h2 style={H2Style}> {props.Title} </h2>
                                
                                { (props.Tag !== undefined) ? <p> - {tag} </p> : null}

                                {/* <Button onClick={checkPassword}> <AddIcon /> Add a work! </Button> */}
                            </div>
                        </div>

                    </nav>

                </div>

            </div >

        );
}

export default HeadTag

