import React, { useState, useEffect, useCallback } from 'react';
import '../responsive.css'

export default function ProjectDetails({id}) {

    const [projects, setProjects] = useState([]);
    
    const getData = useCallback(() => {
        fetch('../data.json'
        ,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        .then(response => response.json())
        .then((projects) => {
            const matched = projects.data.projects.filter(project => project.id === id);
            setProjects(matched[0]);
            console.log(matched);
            console.log(projects);
        })
    }, [id]);

    useEffect(() => {
        getData()
    }, [getData])

    
    return (
        <main className="project--details--main">
            <div className="flex-container">
            
                <div className="project--title">
                    <h4>Project Details</h4>
                </div>

                <div>
                    <h3 className="project--name">{projects.project_name}</h3>
                    <a href={projects.github_link} className="github--link" target="_blank" rel="noreferrer"><h4 className="github--link"><i className="fa fa-github" style={{fontSize: 25}}></i> {projects.github_link}</h4></a>
                </div>

                <div className="list--container">
                    <h4 className="project--detail--title">Technologies Used</h4>
                        <ul className="course--detail--list">
                            {
                                projects.technologies ? 
                                projects.technologies.map(technology => (
                                    <li className="technologies" key={technology.id}>
                                        {technology}
                                    </li>
                                )) :
                                ''
                            }
                        </ul>
                </div>

                <div className="description">
                    <h4>Description</h4>
                    <p>{projects.description}</p>
                </div>

                <div className="main--flex">

                    <div className="img--container">
                        <img src={ projects.image_urls ?
                                    projects.image_urls[0] :
                                    ''
                                } className="img--details"
                             alt=""
                        />
                        <img src={ projects.image_urls ?
                                    projects.image_urls[1] :
                                    ''
                                } className="img--details" 
                              alt=""      
                        />
                        <img src={ projects.image_urls ?
                                    projects.image_urls[2] :
                                    ''
                                } className="img--details" 
                              alt=""      
                        />
                        <img src={ projects.image_urls ?
                                    projects.image_urls[3] :
                                    ''
                                } className="img--details" 
                              alt=""      
                        />
                    </div> 

                </div>
            </div>
        </main>
    )
}
