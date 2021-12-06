import React from "react";
import HeadTag from "./HeadTag";
import MediaCard from "./Card";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footers from "./footer";

function RenderProjects(props) {

  const fullDiv = {
    "margin": "10%",
  };

  const anchorStyle = {
    "textDecoration" : "none",
    "paddingBottom" : "5%" 
  };

  const divStyle = {
    "marginBottom" : "10%"
  }

  // const filteredData = items.docs.filter((a) => a.tag === tag);

  const type = props.type;
  const data = props.items.filter((a) => a.type === type )
  const tag = props.tag;

  // console.log(type);
  // console.log(data);
  // console.log(tag);
  // console.log(data, type);

  console.log("url: " + data[0].replit);

  return (

    <div>
      <HeadTag Title={tag} Tag={type} />

      <div className="container-fluid">

        <div style={fullDiv} className="row">

          {data.map((singleData, i) => {
            return (<div style={divStyle} className="col-lg-4 col-md-6 col-sm-6">
              <MediaCard
                type={type}
                tag={singleData.tag}
                Title={singleData.title}
                Image={singleData.img_url}
                Desc={singleData.desc}
                url={ (singleData.git_url !== undefined)? singleData.git_url : (singleData.CodeSandBox !== undefined) ? singleData.CodeSandBox : (singleData.google_colab !== undefined) ? singleData.google_colab : (singleData.replit !== undefined) ? singleData.replit : singleData.live }
                git = {singleData.git_url !== undefined}
                csb = {singleData.CodeSandBox !== undefined}
                replit = {singleData.replit !== undefined}
                live = {singleData.live !== undefined}
              />
            </div>
            )

          })}

          <a style={anchorStyle} href="/themes"> <Button> <ArrowBackIcon /> All Projects  </Button> </a>

        </div>
      </div>
      <Footers></Footers>
    </div>
  );


}

export default RenderProjects;