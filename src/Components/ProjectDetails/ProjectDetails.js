import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Project_data from '../../assets/MyProjects'
import './ProjectDetails.css'

const ProjectDetails = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {projectid} = useParams();
    const navigate = useNavigate();
    const Project = Project_data.find((e)=>e.Project_No === parseInt(projectid))

    const handleImageClick = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsModalOpen(true);
      };
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
      };
    console.log(selectedImage);

    const handleClick = ()=>{
      navigate('/contact')
    }
    
    
  return (
    <div className='Project'>
        <h1 className='head'>&lt;Project&gt;</h1>
        <div className='Project-container'>
        <div className='ProjectDetails'>
            <h2 className='ProjectTitle'>{Project.title}</h2>
            <p className='Project-description'>{Project.description}</p>
            <div className='technologies-container'>
                <h2>Technologies Used:</h2>
                <ul>
                    {Project.technologies.map((list)=>(
                    <li className='list'>{list}</li>
                    ))}
                </ul>

            </div>
            <div className='features-container'>
            <h2>Features:</h2>
                <ul>
                    {Project.features.map((list)=>(
                    <li className='list'>{list}</li>
                    ))}
                </ul>
                <button onClick={handleClick}  className='Project-btn'>start cooperation</button>
            </div>

        </div>
        <div className='screenshot-container'>
                  {Project.Screenshots.map((img)=>(
                        <img src={img}alt='thumbnail' onClick={() => handleImageClick({img})} className='thumbnail'/>
                    ))}
                     <h2>(work sample)</h2>
                     
            </div>
        </div>
          {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage.img} alt="full-screen" className="full-screen-image" />
        </div>
      )}
    <button onClick={handleClick} className='Project-btn-mobile'>start cooperation</button>

    </div>
  )
}

export default ProjectDetails
