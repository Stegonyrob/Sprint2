import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Register from './Components/Registration';
import Login from './Components/Login';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import Profile from './Components/Profile';
import UsersGrid from './Components/UsersGrid';
import UserProfile from './Components/GetProfileLogged';
// import SearchBarUsers from './Components/SearchBarUsers';
// import GetUsers from './Components/GetUsers';

function App() {
  return (
    <>
      <div className='App'>
        {/* <UsersGrid /> */}
        {/* <Register/> */}
        {/* <Login /> */}
        {/* <Home /> */}
        <Profile />
        {/* <Footer /> */}
      </div>
    </>

  );
}

export default App;
