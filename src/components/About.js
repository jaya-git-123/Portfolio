// About.js
import React from 'react';
import WebDesign from '../Assets/website-design.png';
import AppDesign from '../Assets/app-design.png';


const About = () => {
  return (
    <div className='home-style'>
      <h1 className='name'>About</h1>
      <p className='para'>Hi, I'm an aspiring Frontend Developer eager to launch my career and have developed technical skills in HTML, CSS, JavaScript and React. I'm passionate about building responsive web applications and exploring new technologies. I'm excited to learn and grow as a developer, delivering innovative solutions and I'm eager to join a dynamic team and contribute to cutting-edge projects.</p>
      <div className='skillBars'>
          <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign'className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>WebDesign</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign'className='skillBarImg' />
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>AppDesign</p>
            </div>
          </div>
    </div>
    </div>
  );
};

export default About;