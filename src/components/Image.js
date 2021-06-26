import React, { Component } from "react";

class Image extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        img: this.props.path
    }

    render() {
        return (
            <img 
                src={this.state.img} 
                alt={this.props.title} 
                style={{ width: "100%", height: "auto"}} 
                onMouseEnter = {() => {
                    this.setState({
                        img: this.props.hover
                    })
                }}
                onMouseOut = {() => {
                    this.setState({
                        img: this.props.path
                    })
                }}
            />
        )
    }

}

export default Image;