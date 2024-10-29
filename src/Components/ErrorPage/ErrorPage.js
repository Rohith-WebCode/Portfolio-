import React from 'react'
import background from '../../assets/1594 - Copy.jpg'
import './ErrorPage.css'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const BtnClick = ()=>{
    navigate('/')
  }
  return (
    <div className='ErrorPage'>
    <div className="background-img"><img src={background}/></div>
      <div className='Left-C'>
        <h1 className='number'>404</h1>
        <h2 className='dd-cc'>lost in space</h2>
        <button onClick={BtnClick} className='Error-btn'>Back to Safety</button>
     </div>

    </div>
  )
}

export default ErrorPage