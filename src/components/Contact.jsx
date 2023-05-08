import React from 'react'
import phone from '../img/telephone.svg';
import email from '../img/envelope.svg';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import Form from './Form';
import Footer from './Footer'

import './contact.css';


const Contact =()=>{
    return(
        <div className='c-container'>
            <div className='c-line'></div>
            <div className='cc-wrapper'>
                <div className='cc-left'>
                    <h1>Let's discuss your project</h1>
                    <div className='cc-phone'>
                    <img src={phone} alt=''/>
                    <p> +234 8168229789, +234 8165426175</p>
                    </div>
                    <div className='cc-phone'>
                    <img src={email} alt=''/>
                    <p>pjgraphixs@gmail.com, ugochukwupeter4u@gmail.com</p>
                    </div>
                    <div className='cc-phone'>
                    <img src={github} alt=''/>
                    <p>@ <span className='cc-link'><a href='https://github.com/UgochukwuPeter'>Ugochukwu Peter</a></span></p>
                    </div>
                    <div className='cc-phone'>
                    <img src={linkedin} alt=''/>
                    <p>@ <span className='cc-link'><a href='https://www.linkedin.com/in/peter-ugochukwu-5b6336144/'>Peter Ugochukwu</a></span></p>
                    </div>

                </div>
                <div className='cc-right'>
                    <p><span className='cc-bold'>What's your story</span> Get in touch. Always ready</p>
                    <Form/>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Contact;