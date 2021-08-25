import React, { Component } from 'react'
import Thumbnail from './Thumbnail';
import jsonData from '../projects.json';
import '../index.css';

export default class Projects extends Component {

    // let json = JSON.stringify(jsonData);
    // console.log(json);
    render() {
        return (
            // Render a thumbnail component
            <main>
                <div className="wrap main--grid">
                    <h1>Projects</h1>
                </div>
            </main>
        );
    }
}
