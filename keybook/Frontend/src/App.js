import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Register from './components/Registration';
import Login from './components/Login';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Profile from './components/Profile';

function App() {
  return (
    <>
      <div className='App'>
        <Register/>
        <Login />
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <Footer /> */}
      </div>
    </>

  );
}

export default App;
