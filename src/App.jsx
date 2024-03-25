import React from 'react'
import TemplateHome from './pages/Home/template'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RegisterAdminTemplate from './pages/Log/templates/RegisterAdminTemplate';
import RegisterUserTemplate from './pages/Log/templates/RegisterUserTemplate';
const App = () => {



  return (
     <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<TemplateHome/>} />
        <Route path="/RegisterAdmin" element={<RegisterAdminTemplate/>} />
        <Route path="/RegisterUser" element={<RegisterUserTemplate/>} />

        </Routes>

       </BrowserRouter> 
  )
}

export default App