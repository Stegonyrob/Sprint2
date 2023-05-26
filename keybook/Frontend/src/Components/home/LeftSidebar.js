import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { ButtonDefault } from "../ButtonDefault";

function LeftSidebar() {
  const [users, setUsers] = useState([]);
  // const userId = localStorage.getItem("userId");
  const userId = 1;
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
    <div className="default-card-left ">
      <h4>AMIGOS</h4>

      {users.map((user) => (
        <li key={user.id}>
          <a title={`Perfil ${user.name}`}>
            <img src={user.profile_picture} alt="Avatar" className="avatar" />
            <li>{user.name} </li>
            <li>
              <ButtonDefault
                type="submit"
                content="Ver"
                id="register-form-buttons"
              />
            </li>
          </a>
        </li>
      ))}
    </div>
  );
}

export default LeftSidebar;
