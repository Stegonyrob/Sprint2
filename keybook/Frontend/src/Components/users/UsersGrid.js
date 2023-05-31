import React, { useState, useEffect } from "react";
import FollowButton from "../buttons/FollowButton";
import UnfollowButton from "../buttons/UnfollowButton";
import SearchBarUsers from "./SearchBarUsers";
import UserProfile from "./UserProfile";

function UsersGrid() {
  const [userList, setUserList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [followingList, setFollowingList] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUserList(data);
        setFilteredResults(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleProfileClick = (userId) => {
    const isFollowing = followingList.includes(userId);
    if (isFollowing) {
      setFollowingList(followingList.filter((id) => id !== userId));
    } else {
      setFollowingList([...followingList, userId]);
    }
  };

  const handleSearchResults = (results) => {
    setFilteredResults(results);
  };

  const handleSearchKeyChange = (event) => {
    setSearchKey(event.target.value);
    if (event.target.value === "") {
      setFilteredResults(userList);
    }
  };

  return (
    <main>
      <div className="container main-structure">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="contenedor-amigos">
              <div className="search-friends default-card">
                <label htmlFor="">
                  <h4>COMUNIDAD</h4>
                </label>
                <SearchBarUsers
                  onSearchResults={handleSearchResults}
                  searchKey={searchKey}
                  setSearchKey={setSearchKey}
                  userList={userList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container main-structure">
        <article className="row friends-row">
          {filteredResults.map((userData) => (
            <UserProfile
              key={user.id}
              userData={userData}
              followingList={followingList}
              handleProfileClick={handleProfileClick}
              Follow={FollowButton}
              Unfollow={UnfollowButton}
              loggedInUserId={userId}
            />
          ))}
        </article>
      </div>
    </main>
  );
}

export default UsersGrid;
