import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function HomeView() {
    return (
        <>
            <Profile />      
            <Footer/>     
        </>
    );
}