import React, { useState, useEffect } from "react";
import { url } from "../../utils/url";

function PostCard() {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url + "posts/feed")
        const data = await response.json();
        setPosts(data)        
      } catch (error) {
        alert("Error de servidor")
        console.log(error)
      }
    }
    fetchPosts()
  }, []);  

  return (
    <>
      
      {posts.slice(0, 5).map((post) => (
        <div className="default-card" key={post.post_id}>
          <div className="post-author">
            <a href={`/profile/${post.post_id_user}`}>
              <img src={`${post.profile_picture}`} alt="avatar" className="avatar"
              /></a>
            <h3>{post.name} {post.last_name} </h3>
          </div>
          <p className="post-content">{post.post_content}</p>
        </div>
      ))}
    </>
  );
}

export default PostCard;