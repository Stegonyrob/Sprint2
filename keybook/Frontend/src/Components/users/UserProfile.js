// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function UserProfile({
//   userData,
//   followingList,
//   handleProfileClick,
//   Follow,
//   Unfollow,
// }) {
//   const [isFollowing, setIsFollowing] = useState(
//     followingList.includes(userData.id)
//   );

//   const handleFollowClick = async () => {
//     const response = await fetch(
//       `http://localhost:3000/follow/${userData.id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ logged_id: loggedInUserId }),
//       }
//     );
//     if (response.ok) {
//       setIsFollowing(true);
//       handleProfileClick(userData.id);
//     } else {
//       console.log("Error following user:", response.statusText);
//     }
//   };

//   const handleUnfollowClick = async () => {
//     const response = await fetch(
//       `http://localhost:3000/follow/unfollow/${userData.id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ logged_id: 1 }), // reemplazar 1 por el ID del usuario logueado
//       }
//     );

//     if (response.ok) {
//       setIsFollowing(false);
//       handleProfileClick(userData.id);
//     } else {
//       console.log("Error unfollowing user:", response.statusText);
//     }
//   };

//   return (
//     <div className="col-sm-3 default-card friend-box" key={userData.id}>
//       <Link
//         to={`/profile/${userData.id}`}
//         onClick={() => handleProfileClick(userData.id)}
//       >
//         <img
//           className="friend-avatar"
//           style={{
//             borderRadius: "50%",
//             width: "150px",
//             height: "150px",
//           }}
//           src={userData.profile_picture}
//           alt={userData.name}
//         />
//       </Link>
//       <a>{userData.name}</a>
//       <p>{userData.email}</p>
//       {isFollowing ? (
//         <Unfollow onClick={handleUnfollowClick} />
//       ) : (
//         <Follow onClick={handleFollowClick} />
//       )}
//     </div>
//   );
// }
