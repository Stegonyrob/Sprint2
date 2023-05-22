import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Login from '../components/Login'
import Footer from '../components/Footer';

export default function LoginView() {
    return (
        <>
            <Login />      
            <Footer/>     
        </>
    );
}
