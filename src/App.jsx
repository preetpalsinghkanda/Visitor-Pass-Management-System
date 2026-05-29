import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Industries from './components/Industries'
import Footer from './components/Footer'
import Mission from './components/Mission'

const App = () => {
  return (
    <div>
        <Navbar/>
      <Hero/> 
      <Industries/> 
       <Mission/>
      <Footer/> 

     

    </div>
  )
}

export default App