import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImg from "../../assets/logimg.png" ;
import "./Error.css"
import {X } from 'lucide-react'

export const Error = () => {
  // const homePage ={
  //     navigate({Home})
  // }
   const navigate = useNavigate()
 
  return (
    <div className="error_container">
      <div className="error_wrapper">
        <div className="back_icon_wrapper"   onClick={() => navigate('/home')}>
          <button className="back_icon">
            <X
            className='left_icon'
            size={16}/>
            {/* onClick={homePage()} */}
          </button>
          </div>
        <div className="error_img">
          <img src={ErrorImg}alt="" />
        </div>
        <div className='error_text'>
          Error <span> 404 </span> page not found !!
        </div>    
      </div>
    </div>

  )
}
