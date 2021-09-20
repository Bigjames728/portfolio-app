import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>Skills</strong>
                        </h6>
                        <div className="row mt-top">
                            <div className="col s6">
                                <p>JavaScript</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>React</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Node</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Express</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>HTML</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="col s6">
                                <p>CSS</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}