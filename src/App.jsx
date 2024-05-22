import React from 'react'
import TemplateHome from './pages/Home/template'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import RegisterAdminTemplate from './pages/Log/templates/RegisterAdminTemplate';
import RegisterUserTemplate from './pages/Log/templates/RegisterUserTemplate';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TemplateInicio from './pages/Inicio/template';
import SideBar from './common/components/SideBar';
import TemplateResidence from './pages/Residence/template/TemplateResidence';
import UserInfo from './pages/Residence/template/UserInfo';
import TemplateLearnMore from './pages/learnMore/template/TemplateLearnMore';
import Logout from './pages/Inicio/components/Logout';
const App = () => {



  return (
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<TemplateHome/>} />
        <Route path="/learnMore" element={<TemplateLearnMore/>} />
        <Route path="/RegisterAdmin" element={<RegisterAdminTemplate/>} />
        <Route path="/Logout" element={<Logout/>} />
        <Route path="/RegisterUser" element={<RegisterUserTemplate/>} />
        {/* <Route path="/Inicio" element={<TemplateInicio/>} /> */}
        <Route path="/Main" element={<SideBar/>}>
          <Route index element={<TemplateInicio />} />
          <Route path="/Main/MonitorinPlan" element={<TemplateInicio />} />
          <Route path="/Main/Residence" element={<TemplateResidence/>} />
          <Route path="/Main/Residence/User/:userId" element={<UserInfo/>} />
          <Route path="/Main/Alarm" element={<TemplateInicio />} />
          {/* Otras rutas hijas aquí */}
        </Route>

        </Routes>

       </BrowserRouter> 
      </Provider>
  )
}

export default App