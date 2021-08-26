import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { motion } from 'framer-motion';

function Projects() {
    
    const [projects, setProjects] = useState([]);

    const getData = () => {
        fetch('data.json'
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1}} className="flex-container">
            {projects.map((project, index) => {
                return (
                    <Link className="flex-item module" to={`/projects/${project.id}`} key={project.id}>
                        {/* <h2 className="project-name">{project.project_name}</h2> */}
                        <motion.img 
                            initial={{x: 100}}
                            animate={{x:0}}
                            whileHover={{ 
                                scale: 1.04
                            }}
                            className="project-images"
                            src={project.image_urls[0]} 
                        />
                    </Link>
                )
            })}
            </motion.div>
        </main>
    );
    
}

export default Projects;
