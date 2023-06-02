import React from 'react';
import { ButtonDefault } from '../buttons/ButtonDefault';
import { Link } from "react-router-dom";

function GetUsers({ users }) {
    return (
        <div className="row">
            {users.map((user) => (
                <div className="col-sm-3" key={user.id}>
                    <div className="default-card friend-box">
                        <Link to={`/profile/${user.id}`} >
                            <img
                                className="friend-avatar"                              
                                src={user.profile_picture}
                                alt={user.name}
                            />
                        </Link>
                        <h5>{user.name} {user.last_name}</h5>
                        <Link
                            to={`/profile/${user.id}`}                                                >
                            <ButtonDefault content="Ver perfil" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GetUsers;
