import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>Experience</strong></h6>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    Jan<strong> 2016</strong> - March<strong> 2017</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Web Developer</strong>
                                    </h6>
                                    <p>This is the job description or project description for the above project/job.</p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    Jan<strong> 2016</strong> - March<strong> 2017</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Web Developer</strong>
                                    </h6>
                                    <p>This is the job description or project description for the above project/job.</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}