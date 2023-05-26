import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { ButtonDefault } from "../ButtonDefault";

function RightSidebar({ loggedUserId }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `http://localhost:3000/users?page=${page}&limit=3&not_friends_with=${loggedUserId}`
    )
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [loggedUserId, page]);

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  function handlePreviousPage() {
    setPage((prevPage) => prevPage - 1);
  }

  return (
    <div className="default-card-right">
      <h4>SOLICITUDES</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a title={`Perfil ${user.name}`}>
              <li>
                <img
                  src={user.profile_picture}
                  alt="Avatar"
                  className="avatar"
                />
              </li>
              {user.name}
              <li>
                <ButtonDefault
                  type="submit"
                  content="Seguir"
                  id="register-form-buttons"
                />
              </li>
            </a>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {/* <li>
          <ButtonDefault
            type="submit"
            content=" Anterior"
            id="register-form-buttons"
            onClick={handlePreviousPage}
            disabled={page === 1}
          />
        </li>
        <li>
          <ButtonDefault
            type="submit"
            content="Siguiente"
            id="register-form-buttons"
            onClick={handleNextPage}
          />
        </li> */}
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
}

export default RightSidebar;
