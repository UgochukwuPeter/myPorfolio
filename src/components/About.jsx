import React from 'react'
import ManLaptop from '../img/man1.jpg'
import './about.css';


const About = () => {
    return (
        <div className='a-container'>
            <div className='a-container-wrapper'>
                <div className='a-left'>
                <div className='a-img-bk'></div>
                <img src={ManLaptop} alt=''/>
                </div>
                <div className='a-right'>
                    <h2>About Me</h2>
                    <p className='a-para'>I'm a front-end web developer with expertise in HTML, CSS, Bootstrap, jQuery, and React JS.</p>
                    <p className="a-desc"> I am also proficient in using virtual control tools like Git and GitHub. As a front-end developer, I specialize in designing and developing the visual elements of websites and web applications, such as the layout, navigation, and user interface. My skills in these technologies enables me to create responsive and interactive web interfaces that provides a great user experience for visitors to your websites. Additionally, my familiarity with Git and GitHub allows me to efficiently manage version control and collaborate with other developers on projects.</p>
                </div>
            </div>
        </div>
    )
};

export default About;