import React, { useState, useEffect } from "react";
import NewPost from "../home/NewPost";
import PostCard from "../home/PostCard";
export default function CenterMenu() {
  return (
    <>
      <NewPost />
      <PostCard />
    </>
  );
}
