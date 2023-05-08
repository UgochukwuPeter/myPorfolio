import React from 'react';
import Man from '../img/man.png'

import './header.css'
const Header = () => {
    return (
        <div className='container'>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <p className='c-left-intro'>Hello, my name is</p>
                    <h1>Ugochukwu Peter</h1>
                    <h2>A Frontend Developer</h2>
                    <p className='c-left-desc'> I design and develop scalable websites
                     of all categories and this personal portfolio which showcases my various projects was built using React Js.</p>
                </div>
                <div className='c-right'>
                    <img src={Man} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Header;