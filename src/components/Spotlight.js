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
//                 <Image 
//                         path={this.props.clicked_item.src} 
//                         title={this.props.clicked_item.title} 
//                         key={this.props.clicked_item.id} 
//                         hover={this.props.clicked_item.hover} />
//                 {/* {this.props.contentType === "image"
//                     ? <Image 
//                         path={this.props.clicked_item.src} 
//                         title={this.props.clicked_item.title} 
//                         key={this.props.clicked_item.id} 
//                         hover={this.props.clicked_item.hover} />
//                     : <Video 
//                         path={this.props.clicked_item.src} 
//                         title={this.props.clicked_item.title} 
//                         key={this.props.clicked_item.id} 
//                         hover={this.props.clicked_item.hover} />
//                 } */}
//             </div>
//         );
//     }
// }

// export default Spotlight;