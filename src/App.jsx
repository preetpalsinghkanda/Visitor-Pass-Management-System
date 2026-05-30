import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Industries from './components/Industries'
import Footer from './components/Footer'
import Mission from './components/Mission'
import Success from './components/Success'
import Selfie from './components/Selfie'
import Experience from './components/Experience/Experience'
import AdminLogin from './components/Admin/AdminLogin'
import EmployeeLogin from './components/Employee/EmployeeLogin'

const App = () => {
  return (
    <div className=''>
       {/* <Navbar/>
      <Hero/> 
      <Industries/> 
      <Success/>
       <Mission/>
       <Selfie/>
      <Footer/>    */}

      {/* <Experience/> */}

   {/* <AdminLogin/> */}
   <EmployeeLogin/>
  
      

     

    </div>
  )
}

export default App