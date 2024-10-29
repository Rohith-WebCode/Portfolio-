import React from 'react'
import './Banner.css'
import background from '../../assets/1594.jpg'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/contact')
  }
  return (
    <div className='Banner'>
        <div class="background-animation"><img src={background}/></div>
      <div className='Left'>
        <h1 className='head'>&lt;Hello, world&gt;</h1>
        <h2>My name is Rohith. I build elegant, functional websites using modern web technologies.</h2>
        <button onClick={handleClick} className='contact-btn'>Contact Me</button>

      </div>
    </div>
  )
}

export default Banner
