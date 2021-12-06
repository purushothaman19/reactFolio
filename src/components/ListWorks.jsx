import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

function Details(props) {

    return (

        <div>
            <ListItem>
                <ListItemAvatar>
                    {props.icon}
                </ListItemAvatar>
                <ListItemText primary={props.title} secondary={ props.level ? props.level : null} />
            </ListItem>
        </div>

    )

}

export default Details