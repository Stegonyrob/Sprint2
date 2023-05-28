import React from "react";
import PostCard from "./PostCard";

export default function PostFeed() { 

  return (
    <div>
      {posts.slice(0, 5).map((post) => (
        <PostCard/>
      ))}
    </div>
  );
}