import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import ButtonDefault from "./ButtonDefault";

function LeftSidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container-fluid main-structure">
      <div className="row">
        <div className="col-sm-5 col-md-4 col-lg-3">
          <div className="default-card profile-index">
            <h4>AMIGOS</h4>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <a title={`Perfil ${user.name}`}>
                    <img
                      src={user.profile_picture}
                      alt="Avatar"
                      className="avatar"
                    />
                    {user.name}
                    {/* <ButtonDefault
                      type="submit"
                      content="Enviar"
                      id="register-form-buttons"
                    /> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
