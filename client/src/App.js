import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import NewTaskPage from "./pages/NewTaskPage";
import ProgressTaskPage from "./pages/ProgressTaskPage";
import CompletedPage from "./pages/CompletedPage";
import CanceledPage from "./pages/CanceledPage";
import ProfilePage from "./pages/ProfilePage";
import Page404 from "./pages/Page404";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ChangePassPage from "./pages/ChangePassPage";
import ForgetPassPage from "./pages/ForgetPassPage";
import ResetPassPage from "./pages/ResetPassPage";
import FullscreenLoader from './components/MasterLayout/FullscreenLoader';
import { getToken } from './helper/sessionHelper';

const App = () => {
  if(getToken()){
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<DashboardPage />} />
              <Route exact path="/Create" element={<CreatePage />} />
              <Route exact path="/All" element={<NewTaskPage />} />
              <Route exact path="/Progress" element={<ProgressTaskPage />} />
              <Route exact path="/Completed" element={<CompletedPage />} />
              <Route exact path="/Canceled" element={<CanceledPage />} />
              <Route exact path="/Profile" element={<ProfilePage />} />
              <Route exact path="/ChangePassword" element={<ChangePassPage />} />
              <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader/>
        <Toaster position="top-right" reverseOrder={false}/>
      </Fragment>
    )
  }else{
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
              <Route path="*" element={<Page404 />} />
              <Route exact path="/" element={<Navigate to='/Login' replace />} />
              <Route exact path="/Login" element={<LoginPage />} />
              <Route exact path="/Registration" element={<RegisterPage />} />
              <Route exact path="/ForgetPassword" element={<ForgetPassPage />} />
              <Route exact path="/ResetPassword/:token" element={<ResetPassPage />} />
              <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader/>
        <Toaster position="top-right" reverseOrder={false}/>
      </Fragment>
    )
  }
  
}

export default App
