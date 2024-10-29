import React,{useRef} from 'react'
import './NavBar.css'
import menu_icon from '../../assets/menu_icon.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const menuRef = useRef();
  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('mySidenav')
  }
  const closeNav = (e)=>{
    menuRef.current.classList.toggle('mySidenav')
  }

  return (
    <div className='NavBar'>
      <div ref={menuRef} className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <div class="overlay-content">
          <ul  class="small-menu-links">
        <li onClick={closeNav}><Link to={"/"}>Home</Link></li>
        <li onClick={closeNav}><Link to={"/about"}>About Me</Link></li>
        <li onClick={closeNav}><Link to={"/skills"}>Skill</Link></li>
        <li onClick={closeNav}><Link to={"/project"}>Projects</Link></li>
        <li onClick={closeNav}><Link to={"/contact"}>Contact</Link></li>
          <li className='list-icon'> 
    <a href='https://github.com/Rohith-WebCode'><i class="bi bi-github"></i></a> 
     <a href='https://www.linkedin.com/in/rohith-prakash-developer'><i class="bi bi-linkedin"></i></a> 
     <a href='https://wa.me/918590566352'><i class="bi bi-whatsapp"></i></a> 
     <a href='tel:+918590566352'><i class="bi bi-telephone-fill"></i></a></li>
     <div className='nav-email'>
     <a href='mailto:rohithprakash19@gmail.com'>
     <i class="bi bi-envelope-fill"></i>
        <h1>Email me</h1>
        </a>
      </div>
        </ul>
        
        </div>
</div>
<img  src={menu_icon} alt='' onClick={dropdown_toggle} className='new-dropdown'/>

    </div>
  )
}

export default NavBar