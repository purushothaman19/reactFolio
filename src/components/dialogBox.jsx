import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPython } from '@fortawesome/free-solid-svg-icons'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
// import Parser from 'html-react-parser';
import { Fragment } from 'react'

import 'font-awesome/css/font-awesome.min.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(3),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 5 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const redirect = () => {
    window.open(props.url, '_blank');
  }

  // function changeIcon(){
  //   document.getElementById("icon").innerHTML = '<i color="blue" className="fab fa-python"></i>' 
  // }
  // changeIcon();

  let iconText;
  console.log(props.type);

  const usernamePassword =  ( props.title  === "Sena Exam Portal") ? " Username : jamespurysh@gmail.com , Password : 12345678 " : null

  const userPass = {
    "textAlign" : "center",
    paddingTop : "5%",
    color : "#3DA0D5"
  }

  switch (props.tag) {

    case "python":
      iconText = (
        <Fragment>
          <i color="blue" className="fab fa-python"></i>
        </Fragment>
      );
      break;

    case "flutter":
      iconText = (
        <Fragment>
          <FlutterDashIcon />
        </Fragment>
      );
      break;

    case "js":
      if ( props.type === "react" ) {
        iconText = (
          <Fragment>
            <i class="fab fa-react"></i>
          </Fragment>
        );
        break;
      } else {
        iconText = (
          <Fragment>
            <i class="fab fa-node-js"></i>
          </Fragment>
        );
        break;
      }

    default:
      iconText = "Looking forward to the Weekend";

  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Learn more
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}  {iconText}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.desc}
            <div style={userPass}> {usernamePassword} </div> 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={redirect}>
            {( props.git ) ? "GITHUB" :  ( props.csb ) ? "Code SandBox" : ( props.replit ) ? "Replit" : (props.live) ? "Live Here!" : "Google Colab"  }
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}