import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-css'

import Image from './Image'
import Video from './Video'
import Spotlight from "./Spotlight";

import { atlas_items, images } from '../imports.js';

import video from "../videos/cista4.mp4"


class Atlas extends Component {
    constructor(props) {
        super(props);
    };

    breakpointColumnsObj = {
        default: 3,
        1400: 2,
        800: 1
    };

    // Convert array to JSX items
    items = atlas_items.map(function (item) {
        let spacing_div = null;
        // randomly space them out chaotically, only for 2 columns +
        if (window.innerWidth > 800 && Math.random() > 0.25) {
            const min = 200;
            const max = 400;
            const rand = min + Math.random() * (max - min);
            const randpx = rand + "px";
            spacing_div = <div style={{ height: randpx }} key={item.id} ></div>
        }

        if (item.type === 'image') {
            return [
                spacing_div,
                <NavLink
                    to="/spotlight"
                >
                    <Image
                        key={item.id} title={item.title}
                        path={item.src} hover={item.hover}
                    />
                </NavLink>
            ]
        }
        else if (item.type === 'video') {
            return [
                spacing_div,
                <Video key={item.id} title={item.title}
                    path={item.src} hover={item.hover}
                />
            ]
        }
    });

    render() {
        return (
            <div class="centered-column">
                <Masonry
                    breakpointCols={this.breakpointColumnsObj}
                    className="atlas-grid"
                    columnClassName="atlas-grid_column"
                >
                    {this.items}
                </Masonry>
            </div>
        );
    }
}

export default Atlas;