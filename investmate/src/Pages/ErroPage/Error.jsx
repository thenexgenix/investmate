import React from 'react'
import { useNavigate } from 'react-router-dom'
import errorImage from "../../assets/6325254.jpg"

const Error = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <>
    <div className='w-full flex flex-col items-center justify-center'>
    <button className="btn mt-10 btn-outline btn-success  " onClick={handleBackHome}>
        Back to homepage
      </button>
      <img className='w-full ' src={errorImage} alt="Error" />
    
    </div>
   
    </>
  )
}

export default Error
