import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Home from '../components/Home'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function HomeView() {
    return (
        <>
            <NavBar />
            <Home />
            <Footer />
        </>
    );
}