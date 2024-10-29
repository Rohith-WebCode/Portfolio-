import React from 'react'
import './Skills.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Html_icon from '../../assets/Html-icon.png'
import JAVASCRIPT_icon from '../../assets/j.png'
import Css_icon from '../../assets/CSS-icon.png'
import bootstrap_icon from '../../assets/bootstrap.png'
import react_icon from '../../assets/react.png'
import jquery_icon from '../../assets/jquery-Icon.png'
import Express_icon from '../../assets/Express JS - icon.png'
import nodejs_icon from '../../assets/nodejs-icon.png'
import mongodb_icon from '../../assets/mongodb-icon.png'
import MYSQL_icon from '../../assets/MYSQL-Icon.png'
import postman_icon from '../../assets/postman-Icon.png'
import WordPress_icon from '../../assets/WordPress-Icon.png'
import PHP_icon from '../../assets/php.png'
import Git_icon from '../../assets/Git-icon.jpg'
// import npm_icon from '../../assets/npm-icon.png'
import Tailwind from '../../assets/tailwind.png'
import voice_icon from '../../assets/voice.png'
import Business_icon from '../../assets/Business.png'
import privacy_icon from '../../assets/privacy.png'
import confidential_icon from '../../assets/confidential.png'
const Skills = () => {
  return (
    <div className='Skills'>
       <h1 className='head'>&lt;Skills&gt;</h1>
      <div className='skill-container'>
      <div className='left-side'>
        <h2>Skills I possess as a specialist</h2>
        <ul className='Skills-points'>
          <li>Website development</li>
          <li>Responsive web design</li>
          <li>Backend development</li>
          <li>API integration</li>
          <li>Database management</li>
        </ul>
      </div>
      <div className='icon-grid'>
        <img className='Html_icon' src={Html_icon} alt=''/>
        <img className='Css_icon' src={Css_icon} alt=''/>
        <img className='javascript-icon' src={JAVASCRIPT_icon} alt=''/>
        <img className='bootstrap_icon' src={bootstrap_icon} alt=''/>
        <img className='Tailwind_icon' src={Tailwind} alt=''/>
        <img className='jquery_icon' src={jquery_icon} alt=''/>
        <img className='react_icon' src={react_icon} alt=''/>
        <img className='Express_icon' src={Express_icon} alt=''/>
        <img className='mongodb_icon' src={mongodb_icon} alt=''/>
        <img className='nodejs_icon' src={nodejs_icon} alt=''/>
        <img className='MYSQL_icon' src={MYSQL_icon} alt=''/>
        <img className='PHP_icon' src={PHP_icon} alt=''/>
        <img className='postman_icon' src={postman_icon} alt=''/>
        <img className='WordPress_icon' src={WordPress_icon} alt=''/>
        <img className='Git_icon' src={Git_icon} alt=''/>
      
        
      </div>
      </div>
      <div className='AD-section'>
      <h1 className='head'>&lt;Advantages&gt;</h1>
      <div className='advantage-container'>
      <div class="advantage">
        <img src={voice_icon} alt=''/>
      
        <h3>Communication</h3>
        <p>I ensure fast and clear communication throughout the project. I am responsive to messages and always provide updates to keep the project on track.</p>
      </div>
      <div class="advantage">
      <img src={Business_icon} alt=''/>
      <h3>Business Awareness</h3>
      <p>By understanding your business model, I tailor the project to align with your objectives, creating solutions that meet your specific goals.</p>
      </div>
      <div class="advantage">
      <img src={privacy_icon} alt=''/>
      <h3>Privacy</h3>
      <p>I prioritize the confidentiality of all projects, offering security and discretion in development to protect your data and intellectual property.</p>
      </div>
      </div>
      <div className='confidentiality'>
      <img src={confidential_icon} alt=''/>
      <p class="confidentiality-guarantee">
      I prioritize the confidentiality of your project, ensuring that all sensitive information remains secure throughout our partnership.
      </p>
      </div>
      

      </div>
    </div>
  )
}

export default Skills