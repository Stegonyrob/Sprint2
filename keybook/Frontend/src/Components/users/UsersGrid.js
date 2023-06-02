import React, { useState, useEffect } from "react";

import UsersGridFollow from "./UsersGridFollow";
import UsersGridUnfollow from "./UsersGridUnfollow";
import SearchBarUsers from "./SearchBarUsers";

function UserGrid() {
  const [following, setFollowing] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:3000/users/user");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleSearchResults = (results) => {
    console.log("results", results);
    setUsers(results)
  };

  return (
    <>
      <div className="container main-structure">
        <div className="search-friends default-card">
          <h4>COMUNIDAD</h4>
          <SearchBarUsers onSearchResults={handleSearchResults} />
        </div>
      </div>
      <div className="container main-structure friend-structure">
        <div className="row">
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