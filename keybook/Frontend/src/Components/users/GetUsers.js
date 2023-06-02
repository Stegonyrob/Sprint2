import React from 'react';

function GetUsers({ users }) {
    return (
        <div className="row">
            {users.map((user) => (
                <div className="col-sm-3 default-card friend-box" key={user.id}>
                    <img
                        className="friend-avatar"
                        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
                        src={user.profile_picture}
                        alt=""
                    />
                    <a>{user.name}</a>
                    <p>{user.email}</p>
                    <a href="friendsProfile.html" id="profileLink">
                        Ver perfil
                    </a>
                    <button className="btn btn-outline-warning btn-sm">Enviar solicitud</button>
                </div>
            ))}
        </div>
    );
}

export default GetUsers;
