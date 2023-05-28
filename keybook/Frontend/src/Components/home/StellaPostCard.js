// import React, { useState, useEffect } from "react";

// function PostCard() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       {posts.slice(0, 5).map((post) => (
//         <div className="default-card" key={post.id}>
//           <div className="post-author">
//             <div className="post-card">
//               <a href={`/users/${post.user_id}`}>
//                 <img
//                   src={`${posts.profile_picture}`}
//                   alt="avatar"
//                   style="border-radius: 50%; width: 100px; height: 100px;"
//                   className="avatar"
//                 />
//               </a>
//               <p>{post.post_content}</p>
//               <h4>{post.name} </h4>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostCard;