import React, { useState ,useEffect} from 'react'
import './Project.css'
import Project_data from '../../assets/MyProjects'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

const Project = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [visibleProjects, setVisibleProjects] = useState(2);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  const nextSlide = () => {
    // Wraps around when reaching the end
    if (slideIndex + 2 >= Project_data.length) {
      setSlideIndex(0); 
    } else {
      setSlideIndex(slideIndex + 2);
    }
  };
  const prevSlide = () => {
    // Wrap around when moving backward
    if (slideIndex - 2 < 0) {
      setSlideIndex(Project_data.length - (Project_data.length % 2 === 0 ? 2 : 1)); 
    } else {
      setSlideIndex(slideIndex - 2);
    }
  };
  const setSlide = (index) => {
    setSlideIndex(index);
  };

  const showMoreProjects = ()=>{
    setVisibleProjects(Project_data.length)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='Projects'>
      <h1 className='head'>&lt;Projects&gt;</h1>
      <div className='display-container'>
      { isMobile ? ( 
       <div className="Mobile-design">
       {/* Map through projects and render desktop-specific design */}
       {Project_data.slice(0,visibleProjects).map((project) => (
         <Link to={`/project/${project.Project_No}`}>
         <div key={project.id} className="project-item-mobile">
           <div className='title-overlay'>
                    <h2>{project.title}</h2>
                    </div>
           <img src={project.Mockups} alt={project.title} className="mobile-project-img" />
         </div>
         </Link>
          ))}
          {visibleProjects < Project_data.length && (
          <button className="see-more-btn" onClick={showMoreProjects}>See more</button>
          )}
          </div>
        ) : ( 
        <>
          <div className='container' >
          {Project_data.map((project, index) => {
              if (index >= slideIndex && index < slideIndex + 2) {
                return (
                  <Link to={`/project/${project.Project_No}`}>
                  <div key={index} className="IMG-container">
                    <div className='title-overlay'>
                    <h2>{project.title}</h2>
                    </div>
                   <img src={project.Mockups} className="project-image" alt={project.title}/>
                  </div>
                  </Link> 
                );
              }
              return null;
            })}
            <div className='button-container'>
            <a className='button-left' onClick={prevSlide}><i class="bi bi-arrow-left-circle"></i></a>
            <a className='button-right' onClick={nextSlide}><i class="bi bi-arrow-right-circle"></i></a>
          </div>
          </div>
          
          <div className='dot-container'>
          {Array.from({ length: Math.ceil(Project_data.length / 2) }).map((_, index) => (
  
        <div  key={index} className={`dot ${index === Math.floor(slideIndex / 2) ? 'active' : ''}`} onClick={() => setSlide(index * 2)}></div>
            ))}
          </div>
          </>

           
          
        )}
      </div>
     

    </div>
  )
}

export default Project