import React, { useState, useEffect } from "react";
import { url } from "../../utils/url";

function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
    try{
    const response = await fetch(url + "posts")
    const data = await response.json();
    setPosts(data)
    console.log(data)
     } catch (error) {
      alert("Error de servidor")
      console.log(error)
  }}

  fetchPosts()
  }, []);

  return (
    <div>
      {/* .slice(0, 5) */}
      {posts.map((post) => (
        <div className="default-card" key={post.id}>
          <div className="post-author">
            <div className="post-card">
              <a href={`/users/${post.user_id}`}>
                <img
                  src={`${post.profile_picture}`}
                  alt="avatar"
                  // style="border-radius: 50%; width: 100px; height: 100px;"
                  className="avatar"
                />
              </a>
              <p>{post.post_content}</p>
              <h4>{post.name} </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;