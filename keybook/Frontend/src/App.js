import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import UsersGrid from "./Components/UsersGrid";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Register from "./components/Registration";
// import Login from "./components/Login";
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import UsersGrid from "./Components/UsersGrid";
// import GetUsers from './Components/GetUsers';
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<UsersGrid />} />
          </Routes>
        </BrowserRouter>

        <NavBar />
        {/* <Register/> */}
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
