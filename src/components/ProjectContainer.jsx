import React from 'react'

import './projectContainer.css';
import dataItem from '../dataItem.json';

const ProjectContainer =()=>{
    console.log(dataItem);
    return(
        <div className='pc-container'>
        {
            dataItem.data.map((item) =>(
                <div className='pc-left' key={item.id}>
                <img className="pc-img" src ={item.imgUrl} alt=''/>
                <div className='pc-desc'>
                <div className='pc-item'>
                    <p>Built with:</p>
                    <p className='pc-item-stack'>{item.stack}</p>
                </div>
                <div className='pc-left-desc'>
                <p className='pc-left-d'>{item.desc}</p>
                <a className="pc-left-a" href={item.url} target='blank'>Visit Page</a>
                </div>
                
            </div>
                </div>
            ))
        }
        </div>
    )
};
export default ProjectContainer;