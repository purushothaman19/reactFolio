import React from "react";
import RenderProjects from "./dataSet";
import RenderTypes from "./ProjectTypes";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch(window.location.href + "api", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            });
    }

    render() {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const tag = params.get('tag');
        const type = params.get("type");

        console.log(tag);

        const { items } = this.state;
        // console.log(items);
        const loadingStyle = { "padding": "10%" }

        if (!this.state.isLoaded) {
            return <div style={loadingStyle}> Loading.... </div>
        } else {
            // const filteredData = items.docs.filter((a) => a.tag === tag);

            const typeData = items.docs.filter((a) => a.type === type);
            const tagData = items.docs.filter((a) => a.tag === tag);
            const data = (typeData.length !== 0) ? typeData : tagData

            console.log(data);

            // console.log(filteredData);
            if (tag === "python" && type === null) {
                return <RenderTypes items={data} count={data.length} tag={tag} type={type} />
            } else if (tag === "python" && type !== null) {
                return <RenderProjects items={data} tag={tag} type={type} />
            } else if (tag === "js" && type === null) {
                return <RenderTypes items={data} count={data.length} tag={tag} type={type} />
            } else if (tag === "js" && type !== null) {
                return <RenderProjects items={data} tag={tag} type={type} />
            } else {
                return <RenderProjects items={data} tag={tag} />
            }
        }

    }
}

export default Project;
