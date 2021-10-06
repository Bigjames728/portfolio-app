import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>Project Experience</strong></h6>
                        <br />
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    Oct<strong> 2021</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Full Stack Exercise Tracker</strong>
                                    </h6>
                                    <p>Allows users to register and enter their daily exercises as well as run CRUD operations on those exercises. Built this app out of a need to record my exercise and not having an app to do so.</p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    Sept<strong> 2021</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Portfolio Website</strong>
                                    </h6>
                                    <p>	A web app created to showcase the projects I have built and what I am working on. This is an everchanging project with new features being implemented over time.</p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    Aug<strong> 2021</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Full Stack Course Directory</strong>
                                    </h6>
                                    <p>	Allow teachers to sign up for access to the app, including authentication, view a list of courses and specific course detail, create, update and delete courses stored in a database.</p>
                                </blockquote>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}