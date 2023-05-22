import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Register from './Components/Registration';
import Login from './Components/Login';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Profile from './components/Profile';
import UsersGrid from './Components/UsersGrid';
import SearchBarUsers from './Components/SearchBarUsers';
// import GetUsers from './Components/GetUsers';

function App() {
  return (
    <>
      <div className='App'>
        {/* <SearchBarUsers /> */}
        <UsersGrid />
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
