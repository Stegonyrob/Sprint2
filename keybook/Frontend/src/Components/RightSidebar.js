import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { ButtonDefault } from "./ButtonDefault";

function RightSidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="default-card">
      <h4>SOLICITUDES</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a title={`Perfil ${user.name}`}>
              <img src={user.profile_picture} alt="Avatar" className="avatar" />
              {user.name}
              <ButtonDefault
                type="submit"
                content="Enviar"
                id="register-form-buttons"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightSidebar;
