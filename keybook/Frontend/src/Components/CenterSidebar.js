import React, { useState, useEffect } from "react";
import { FormInput } from "./FormInput";
import SubmitButton from "./ButtonStyle";
import {
  faLocationDot,
  faImage,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCard from "./PostCard";

function PostList({ loggedUserId }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `http://localhost:3000/posts?page=${page}&limit=5&not_friends_with=${loggedUserId}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [loggedUserId, page]);

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
        setPosts((prevPosts) => [data, ...prevPosts]);
        event.target.reset();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="default-card ">
      <section id="post-list">
        <form id="write-new-post" action="/posts" method="POST" novalidate>
          <h3>
            <SubmitButton
              content={<FontAwesomeIcon icon={faPenNib} />}
              id="send-new-post"
              title="Upload image"
            />
            NUEVA PUBLICACIÓN
          </h3>

          <h4>PUBLICACIONES</h4>

          <FormInput
            id="new-post-content"
            className="new-post"
            cols="70"
            rows="2"
            placeholder="ESCRIBIR POST..."
            type="text"
            name="post"
          />
          <div className="insert">
            <SubmitButton
              type="submit"
              content="Enviar"
              title="Enviar"
              id="send-new-post"
              className="btn-post-btn"
            />
            <SubmitButton
              type="submit"
              onClick={() => handleClick()}
              content={<FontAwesomeIcon icon={faImage} />}
              id="send-new-post"
              title="Upload image"
            />

            <SubmitButton
              type="submit"
              onClick={() => handleClick()}
              content={<FontAwesomeIcon icon={faLocationDot} />}
              title="Enviar"
              id="send-new-post"
            />
          </div>

          <span className="date"></span>
        </form>
        <ul>
          <li>
            {posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </li>
        </ul>

        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Anterior
          </button>
          <button onClick={handleNextPage}>Siguiente</button>
        </div>
      </section>
    </div>
  );
}

export default PostList;
