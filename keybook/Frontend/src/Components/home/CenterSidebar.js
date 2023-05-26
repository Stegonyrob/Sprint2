import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import NewPost from "../home/NewPost";
import PostCard from "../home/PostCard";
function PostList({ loggedUserId }) {
  const [page, setPage] = useState(1);

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  function handlePreviousPage() {
    setPage((prevPage) => prevPage - 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const postContent = event.target.elements.post.value;
    const postUserId = loggedUserId;
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_content: postContent,
        post_id_user: postUserId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
      })
      .catch((error) => console.error(error));
  }
  // function PostList({ loggedUserId }) {
  //   const [posts, setPosts] = useState([]);
  //   const [page, setPage] = useState(1);

  //   useEffect(() => {
  //     fetch(
  //       `http://localhost:3000/posts?page=${page}&limit=5&not_friends_with=${loggedUserId}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data));
  //   }, [loggedUserId, page]);

  //   function handleNextPage() {
  //     setPage((prevPage) => prevPage + 1);
  //   }

  //   function handlePreviousPage() {
  //     setPage((prevPage) => prevPage - 1);
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const postContent = event.target.elements.post.value;
  //     const postUserId = loggedUserId;
  //     fetch("http://localhost:3000/posts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         post_content: postContent,
  //         post_id_user: postUserId,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPosts((prevPosts) => [data, ...prevPosts]);
  //         event.target.reset();
  //       })
  //       .catch((error) => console.error(error));
  //   }

  return (
    <>
      <NewPost handleSubmit={handleSubmit} />
      <PostCard />
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </>
  );
}

export default PostList;
