import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

function TypeCard(props) {

    let displayImg;

    switch (props.type) {

        case "ds":
            displayImg = "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/03/AI_Animated.gif";
            break;

        case "turtle":
            displayImg = "https://cdn.dribbble.com/users/1044993/screenshots/3637946/media/fae0b15fa9a884cfec8e3734d9aad297.gif";
            break;

        case "selenium":
            displayImg = "https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Untitled-1.gif"
            break;
            
        case "web":
            displayImg = "https://i.gifer.com/origin/23/233d0ae0bb78c79932c61fc7609b1535.gif"
            break;

        case "react":
            displayImg = "https://www.logigroup.com/images/modules/react.gif"
            break;
            
        case "node":
            displayImg = "https://onepatch.com/wp-content/uploads/2020/03/NODEJS_CIRCLE.gif"
            break;
            
        case "game":
            displayImg = " http://discovertemplate.com/wp-content/uploads/2020/10/DT_G44_Video-Game-Animated-GIF-Icon-pack.gif "
            break;

        default:
            displayImg = "";
            break;

    };

    const imgStyle = {
        // "width": "100%",
    }

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const tag = params.get('tag');

    // const ml = "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/03/AI_Animated.gif";
    // const turtle = "https://cdn.dribbble.com/users/1044993/screenshots/3637946/media/fae0b15fa9a884cfec8e3734d9aad297.gif";
    // const selenium = "https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Untitled-1.gif";
    // const web = "https://c.tenor.com/x6w5niSTPysAAAAd/responsive-website.gif";

    const Href = `/projects?tag=${tag}&type=${props.type}`;
    const title = props.title
    const countText = `Number of Projects: ${props.count}`

    return (
        <div style={{"height" : "100%"}}>

            <a href={Href}>
                <Card
                    hoverable
                    style={{ width: "100%", padding: "6%"}}
                    cover={<img className="typeCard" alt="some error" src={displayImg} style={imgStyle} />}
                >
                    <Meta title={title} description={countText} />
                </Card>
            </a>

        </div>
    )

}
export default TypeCard;
