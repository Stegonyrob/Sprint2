import { useState, useEffect } from 'react';

export function getUsers() {
    const [randomUsers, setRandomUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/users');
            const data = await response.json();
            const randomUsers = data.sort(() => Math.random() - 0.5).slice(0, 8);
            console.log(randomUsers);
            setRandomUsers(randomUsers);
        }
        fetchData();
    }, []);
    return (
        <>
            <div className="row">
                {randomUsers.map((user) => (
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
        </>
    );
}
export default getUsers;