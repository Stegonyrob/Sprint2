import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Follow from "../buttons/FollowButton";

function RightSidebar({ loggedUserId }) {
  const [requests, setRequests] = useState([]);

  const [page] = useState(1);
  async function fetchRequests() {
    try {
      const response = await fetch(
        `http://localhost:3000/follow/not-following/${loggedUserId}`
      );
      const data = await response.json();
      setRequests(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchRequests();
  }, [page, loggedUserId]);

  return (
    <div className="default-card-right">
      <h2>SUGERENCIAS</h2>
      <ul>
        {requests.map((user) => (
          <li key={user.id}>
            <a title={`Perfil ${user.name}`} href={`/profile/${user.id}`}>
              <img src={user.profile_picture} alt="Avatar" className="avatar" />
            </a>
            <li>
              <h4>
                {user.name} {user.last_name}
              </h4>
            </li>
            <li>
              <Follow id={user.id} />
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RightSidebar;
