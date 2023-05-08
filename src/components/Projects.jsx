import React from 'react'
import ProjectContainer from './ProjectContainer';
import './projects.css';

const Projects =()=>{
    return(

        <div className='p-container'>
            <div className='p-wrapper'>
                <h1 className='p-title'>Create & inspire. its Peter</h1>
                <p className="p-desc">A collection of my various projects done for both companies and as a challenge</p>
                <div className="p-content">
                <ProjectContainer/>
                </div>

                
            </div>
        </div>
    )
};

export default Projects;