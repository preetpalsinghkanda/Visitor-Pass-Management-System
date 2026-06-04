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
import VisitorLogin from './components/Visitor/VisitorLogin'
import SecurityLogin from './components/Security/SecurityLogin'
import VisitorDashBoard from './components/Visitor/VisitorDashBoard'
import VisitorPass from './components/Visitor/VisitorPass'
import VisitorSettings from './components/Visitor/VisitorSettings'
import VisitorVisits from './components/Visitor/VisitorVisits'
import EmployeeDashboard from './components/Employee/EmployeeDashboard'
import SecurityDashboard from './components/Security/SecurityDashboard'
import VisitorSignup from './components/Visitor/VisitorSignup'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className=''>
     <Toaster/>
       {/* <Navbar/>
      <Hero/> 
      <Industries/> 
      <Success/>
       <Mission/>
       <Selfie/>
      <Footer/>    */}

      {/* <Experience/> */}

   {/* <AdminLogin/> */}
   {/* <EmployeeLogin/> */}

   {/* <VisitorLogin/> */}
   {/* <SecurityLogin/> */}


   {/* <VisitorDashBoard/> */}

   {/* <VisitorPass/ */}

   {/* <VisitorSettings/> */}

   {/* <VisitorVisits/> */}
   {/* <EmployeeDashboard/> */}


   {/* <SecurityDashboard/> */}
  
      
<VisitorSignup/>
     

    </div>
  )
}

export default App