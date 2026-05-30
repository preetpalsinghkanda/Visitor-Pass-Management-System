import React from 'react'
import heroImg from '../assets/home-background-min.webp'

const Selfie = () => {
  return (
    <div>
        <img src={heroImg} className='h-full w-full object-fit ' alt="" />
    </div>
  )
}

export default Selfie