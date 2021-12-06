import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomizedDialogs from './dialogBox';

function MediaCard(props) {

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.Image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.Desc}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Share</Button> */}
                <CustomizedDialogs
                    type={props.type}
                    url={props.url}
                    tag={props.tag}
                    title={props.Title}
                    desc={props.Desc}
                    git={props.git}
                    csb={props.csb}
                    replit={props.replit}
                    live={props.live}
                />
            </CardActions>
        </Card>
    );
}

export default MediaCard;