import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Home from '../components/Home'
import Footer from '../components/Footer';

export default function HomeView() {
    return (
        <>
            <Home />      
            <Footer/>     
        </>
    );
}