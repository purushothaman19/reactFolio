import React from "react";
import HeadTag from "./HeadTag";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footers from "./footer";
import TypeCard from "./typesCard";

function RenderTypes(props) {

    const fullDiv = {
        "margin": "10%",
        "padding": "2%",
        height: "100%",
        "marginTop": "2%"
    };

    const anchorStyle = {
        "textDecoration": "none",
        margin: "5%"
    };


    const boxStyle = {
        padding: "1%"
    };

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const tag = params.get('tag');

    const data =props.items;
    console.log(data);
    
    const turtleCount = props.items.filter((a) => a.type === "turtle" ).length
    // console.log(turtleCount);

    const gameCount = props.items.filter((a) => a.type === "game" ).length
    // console.log(gameCount);

    const dsCount = props.items.filter((a) => a.type === "ds" ).length
    // console.log(dsCount);

    const webCount = props.items.filter((a) => a.type === "web" ).length
    // console.log(webCount);

    const seleniumConut = props.items.filter((a) => a.type === "selenium" ).length
    // console.log(seleniumConut);

    const reactCount = props.items.filter((a) => a.type === "react" ).length
    console.log(reactCount);

    const nodeCount = props.items.filter((a) => a.type === "node" ).length
    console.log(nodeCount);

    if (tag === 'python') {

        return (

            <div>
    
                <HeadTag Title={tag} />
    
                <div style={fullDiv} className="row" >
    
                    <div className="col-lg-4 col-md-6 col-sm-6 box" style={boxStyle}>
                        <TypeCard title="Turtle" type="turtle" count={turtleCount} />
                    </div>
    
    
                    <div className="col-lg-4 col-md-6 col-sm-6 box" style={boxStyle}>
                        <TypeCard title="Data Science" type="ds" count={dsCount} />
                    </div>
    
    
                    <div className="col-lg-4 col-md-6 col-sm-6 box" style={boxStyle}>
                        <TypeCard title="Web Development" type="web" count={webCount} />
                    </div>
    
    
                    <div className="col-lg-4 col-md-6 col-sm-6 box" style={boxStyle}>
                        <TypeCard title="Selenium" type="selenium" count={seleniumConut} />
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6 box" style={boxStyle}>
                        <TypeCard title="Python Games" type="game" count={gameCount} />
                    </div>
    
                    <a style={anchorStyle} href="/themes"> <Button>  <ArrowBackIcon />   All Themes </Button> </a> 
    
                </div>
                <Footers></Footers>
            </div>
    );

    } else {

        return (
            <div>
    
            <HeadTag Title={tag} />

            <div style={fullDiv} className="row" >

                <div className="col-lg-4 col-md-6 col-sm-6 box" style={boxStyle}>
                    <TypeCard title="React" type="react" count={reactCount} />
                </div>


                <div className="col-lg-4 col-md-6 col-sm-6 box" style={boxStyle}>
                    <TypeCard title="Node" type="node" count={nodeCount} />
                </div>

                <a style={anchorStyle} href="/themes"> <Button> <ArrowBackIcon /> All Themes </Button>  </a> 

            </div>
            <Footers></Footers>
        </div>
        );

    }


}

export default RenderTypes;