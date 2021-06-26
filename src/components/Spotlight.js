import React, { Component } from 'react';

import Image from "./Image";
import Video from "./Video";

class Spotlight extends Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
    }

    load = (backgroundColor, textColor) => {
        this.props.appChangeColor(backgroundColor, textColor);
    }

    handleLoad() {
        // set the default colouring on load
        this.load("red", "white")
    }

    render() {
        return (
            <div className="centered-column side-margins"  >
                {this.props.contentType === "image"
                    ? <Image />
                    : <Video path='./videos/ripple-random2.mp4' title='TEST' />
                }
            </div>
        );
    }
}

export default Spotlight;