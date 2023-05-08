import React from 'react'

import './footer.css';

const Footer =()=>{
    const date = new Date().getFullYear();
    return(
        <div className='foot-container'>
            <p>Copyright @{date}. Designed by Ugochukwu Peter</p>
        </div>
    )
};

export default Footer;