import React, { useState } from 'react';
import "./App.css";
// import Register from './components/Registration';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='App'>
        {/* <Register/> */}
        <Login />
        <Footer />
      </div>
    </>

  );
}

export default App;
