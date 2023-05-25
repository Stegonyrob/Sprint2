import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { ButtonDefault } from "./ButtonDefault";

function LeftSidebar() {
  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem("userId");

  async function fetchUsers() {
    try {
      const response = await fetch(
        `http://localhost:3000/follow/following/${userId}`
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="default-card ">
      <h4>AMIGOS</h4>

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
    </div>
  );
}

export default LeftSidebar;
