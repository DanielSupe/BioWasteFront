import React from 'react'
import TemplateHome from './pages/Home/template'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RegisterAdminTemplate from './pages/Log/templates/RegisterAdminTemplate';
import RegisterUserTemplate from './pages/Log/templates/RegisterUserTemplate';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TemplateInicio from './pages/Inicio/template';
const App = () => {



  return (
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<TemplateHome/>} />
        <Route path="/RegisterAdmin" element={<RegisterAdminTemplate/>} />
        <Route path="/RegisterUser" element={<RegisterUserTemplate/>} />
        <Route path="/Inicio" element={<TemplateInicio/>} />

        </Routes>

       </BrowserRouter> 
      </Provider>
  )
}

export default App