import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import UsersGrid from '../components/UsersGrid'
import Footer from '../components/Footer';

export default function HomeView() {
    return (
        <>
            <UsersGrid />      
            <Footer/>     
        </>
    );
}