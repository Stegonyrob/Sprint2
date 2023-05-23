import React, { useState, useEffect } from 'react';

function ProfileCard({ name, email, profilePicture }) {
    return (
        <div className="default-card">
            <div className="profile-details">
                <div className="profile-info">
                    <h2 id="profile-fullName">{name}</h2>
                </div>
                <div>
                    <h5 id="profile-location">Ciudad,</h5>
                    <h5 id="profile-loc-country">País</h5>
                    <h5 id="profile-birthDate">Fecha de nacimiento</h5>
                </div>
            </div>
            <div className="user-bio profile-data">
                <img
                    id="profile-avatar"
                    src={profilePicture}
                    alt="avatar"
                    className="avatar"
                />
                <p></p>
            </div>
            <p>{email}</p>
        </div>
    );
}

export default ProfileCard;
