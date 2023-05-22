import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function HomeView() {
    return (
        <>
            <NavBar />
            <Profile />
            <Footer />
        </>
    );
}