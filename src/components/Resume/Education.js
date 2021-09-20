import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>Education</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th>School</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full Stack JavaScript</td>
                                    <td>August 2021</td>
                                    <td>Team Treehouse</td>
                                    <td><a href="https://www.credential.net/bb745d1d-5db2-4909-85a7-ba9270a3a5c6#gs.b1vei9" target="_blank" rel="noreferrer" className="btn blue lighten-2">View certificate</a></td>
                                </tr>
                                <tr>
                                    <td>Marketing BA</td>
                                    <td>June 2017</td>
                                    <td>EWU</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}