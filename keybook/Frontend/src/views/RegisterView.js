import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Register from '../components/Registration'
import Footer from '../components/Footer';

export default function RegisterView() {
    return (
        <>
            <Register />
            <Footer />
        </>
    );
}

