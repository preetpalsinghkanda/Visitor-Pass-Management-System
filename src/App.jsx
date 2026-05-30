import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Industries from './components/Industries'
import Footer from './components/Footer'
import Mission from './components/Mission'
import Success from './components/Success'
import Selfie from './components/Selfie'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <Industries/> 
      <Success/>
       <Mission/>
       <Selfie/>
      <Footer/>  

      

     

    </div>
  )
}

export default App