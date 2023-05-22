import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import UsersGrid from "./Components/UsersGrid";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import Register from "./components/Registration";
// import Login from "./components/Login";
// import Footer from './components/Footer';
// import GetUsers from './Components/GetUsers';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/UsersGrid" element={<UsersGrid />} />
          </Routes>
        </BrowserRouter>
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
