import React, { useState, useEffect } from 'react';


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
            console.log(projects.data.projects[0]);
            setProjects(projects.data.projects);
            
        })
    };

    useEffect(() => {
        getData()
    },[]) 

    

    return (
        <main>
            <div className="flex-container">
            
                
                <div className="wrap">
                    <h2>Project Details</h2>
                        <form>
                            <div className="main--flex">
                                <div>
                                    <h3 className="course--detail--title">Project</h3>
                                    <h4 className="course--name">{projects.project_name}</h4>
                                    <h4>{id}</h4>
                                    
                                    
                                </div>
                                <div>
                                    <h3 className="course--detail--title">Technologies Used</h3>
                                    <ul className="course--detail--list">
                                    {projects.technologies}
                                    </ul>
                                </div>
                            </div>
                        </form>
                </div>
                
            
            </div>
        </main>
    )
}
