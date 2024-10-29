import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Footer.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const { pathname } = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    // Check if the current pathname matches the desired routes
    if (pathname === "/" || pathname === "/about" || pathname === "/project" || pathname === "/contact") {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, [pathname]); 
  return (
    <>
    { showFooter && (  
      <div className='Footer'>
      <a href='mailto:rohithprakash19@gmail.com'><div  className='email'>
      <i class="bi bi-envelope-fill"></i>
      <h1>Email me</h1>
      </div>
      </a>
      <div className='icons'>
     <a href='https://github.com/Rohith-WebCode'><i class="bi bi-github"></i></a> 
     <a href='https://www.linkedin.com/in/rohith-prakash-developer'><i class="bi bi-linkedin"></i></a> 
     <a href='https://wa.me/918590566352'><i class="bi bi-whatsapp"></i></a> 
     <a href='tel:+918590566352'> <i class="bi bi-telephone-fill"></i></a>    
      </div>
        
    </div>
    )
}
    </>
  )
}

export default Footer