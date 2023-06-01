import React, { useState, useEffect } from "react";

import UsersGridFollow from "./UsersGridFollow";
import UsersGridUnfollow from "./UsersGridUnfollow";
import SearchBarUsers from "./SearchBarUsers";
function UserGrid() {
  const [following, setFollowing] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <div class="container main-structure">
        <div className="search-friends default-card">
          <h4>COMUNIDAD</h4>
          <SearchBarUsers />
        </div>
      </div>
      <div class="container main-structure friend-structure">
        <div class="row">
          <UsersGridFollow
            users={users}
            following={following}
            setFollowing={setFollowing}
          />
          <UsersGridUnfollow />
        </div>
      </div>
    </>
  );
}
export default UserGrid;
