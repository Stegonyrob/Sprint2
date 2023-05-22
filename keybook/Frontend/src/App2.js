import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import UsersGrid from './components/UsersGrid';


function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterView />} />
            <Route path="/login" element={<LoginView />} />
            {/* <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/community" element={<UsersGrid />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
