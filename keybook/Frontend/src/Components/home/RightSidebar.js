import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
<<<<<<< HEAD
import SubmitButton from "../ButtonStyle";
import Pagination from "../pagination";
import Unfollow from "./UnFollowUser";
=======
import Follow from "../buttons/FollowButton";

>>>>>>> main
function RightSidebar({ loggedUserId }) {
  const [requests, setRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [page, setPage] = useState(1);
  async function fetchRequests() {
    try {
      const response = await fetch(
        `http://localhost:3000/users?page=${page}&limit=3&not_friends_with=${loggedUserId}`
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
  }, [page]);
  
  return (
    <div className="default-card-right">
      <h2>SUGERENCIAS</h2>
      <ul>
        {requests.map((user) => (
          <li key={user.id}>
<<<<<<< HEAD
            <a title={`Perfil ${user.name}`}>
              <li>
                <img
                  src={user.profile_picture}
                  alt="Avatar"
                  className="avatar"
                />
              </li>
              <li>{user.name}</li>
              <li>
                <SubmitButton
                  type="submit"
                  content="Seguir"
                  id="register-form-buttons"
                  onClick={() => handleFollowUser(user)}
                />
              </li>
            </a>
            <Unfollow id={13} />
=======
        <a  title={`Perfil ${user.name}`} href={`/profile/${user.id}`}>
          <img src={user.profile_picture} alt="Avatar" className="avatar" /></a>
          <li><h4>{user.name} {user.last_name}</h4></li>
          <li>           
           <Follow id={user.id}/>            
>>>>>>> main
          </li>
        </li>
        ))}
      </ul>   
    </div>
  );
}
export default RightSidebar;
