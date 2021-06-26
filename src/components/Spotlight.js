// import React, { Component } from 'react';

// import Image from "./Image";
// import Video from "./Video";

// class Spotlight extends Component {
//     constructor(props) {
//         super(props);
//         this.handleLoad = this.handleLoad.bind(this);
//     }

//     componentDidMount() {
//         window.addEventListener('load', this.handleLoad);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('load', this.handleLoad);
//     }

//     load = (backgroundColor, textColor) => {
//         this.props.appChangeColor(backgroundColor, textColor);
//     }

//     handleLoad() {
//         // set the default colouring on load
//         this.load("red", "white")
//     }

//     render() {
//         return (
//             <div className="centered-column side-margins"  >
//                 {this.props.contentType === "image"
//                     ? <Image path={item.src} title={item.title} key={item.id} hover={item.hover} />
//                     : <Video path={item.src} title={item.title} key={item.id} hover={item.hover} />
//                 }
//             </div>
//         );
//     }
// }

// export default Spotlight;