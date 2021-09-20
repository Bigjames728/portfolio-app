import React, { Component } from 'react'

export default class AboutNew extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">
                            <strong>About Me</strong>
                        </h6>
                        <p className="grey-text">
                        Dedicated and certified junior full stack developer possessing strong critical thinking skills. Passionate about continual education and the latest technology trends. Strong integrity and work ethic. 
                        </p>
                    </div>
                    <div className="card-action">
                        <h6>
                            <strong>Personal Info</strong>
                        </h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Location:</strong> Spokane, WA</p>
                                <p><strong>Email:</strong> bigjames728@gmail.com</p>
                                <p><strong>Phone:</strong> (360) 831 1477</p>
                            </div>
                            <div className="s12 m6 l6 xl6">
                                <p><i class="fab fa-github"><a href="https://github.com/Bigjames728" target="_blank" rel="noreferrer"> github.com/Bigjames728</a></i></p>
                                <p><i class="fab fa-linkedin-in"><a href="https://www.linkedin.com/in/james-fleming-b5291463/" target="_blank" rel="noreferrer"> linkedin.com/james-fleming</a></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}