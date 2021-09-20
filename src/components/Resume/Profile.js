import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src="images/headshot.jpg" alt="James Fleming" />
                        {/* <Link className="btn-floating halfway-fab waves-effect wave-light red">
                            <i className="material-icons activator">more_vert</i>
                        </Link> */}
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            James Fleming
                        </span>
                        <p>Junior Full Stack Developer</p>
                    </div>
                </div>
            </div>
        )
    }
}