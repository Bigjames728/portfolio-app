import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


export default function ProjectDetails({id}) {

    const [projects, setProjects] = useState([]);
    


    const getData = () => {
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
    };

    useEffect(() => {
        getData()
    },[]) 

    

    return (
        <main>
            <div className="flex-container">
                <div className="wrap">
                    <h1>Project Details</h1>
                    <h3 className="course--name">{projects.project_name}</h3>
                        <div className="main--flex">
                            <div className="img--container">
                                <img src={ projects.image_urls ?
                                            projects.image_urls[0] :
                                            ''
                                        } className="img--details" />
                                <img src={ projects.image_urls ?
                                            projects.image_urls[1] :
                                            ''
                                        } className="img--details" />
                            </div>
                            <div className="list--container">
                                <h3 className="course--detail--title">Technologies Used</h3>
                                <ul className="course--detail--list">
                                    {
                                        projects.technologies ? 
                                        projects.technologies.map(technology => (
                                            <li key={technology.id}>
                                                {technology}
                                            </li>
                                        )) :
                                        ''
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="description">
                            <h3>Description</h3>
                            <p>{projects.description}</p>
                        </div>
                </div>
            </div>
        </main>
    )
}
