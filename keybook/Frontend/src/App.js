import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';
import UsersView from './views/UsersView';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/users" element={<UsersView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
