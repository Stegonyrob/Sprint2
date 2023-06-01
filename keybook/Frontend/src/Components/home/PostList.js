import React, { useState, useEffect, useRef } from "react";
import NewPost from "./NewPost";
import PostFeed from "./PostFeed";
import { url } from "../../utils/url";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [postAdded, setPostAdded] = useState([]);
  const loggedId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url + `posts/feed/${loggedId}`);
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        alert("Error de servidor");
        console.log(error);
      }
    };
    fetchPosts();
  }, [postAdded]);

  return (
    <>
      <NewPost setPostAdded={setPostAdded} />
      <PostFeed posts={posts} postAdded={postAdded} />{" "}
    </>
  );
}

export default PostList;
