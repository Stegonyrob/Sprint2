import React, { useState, useEffect } from "react";
import SubmitButton from "../ButtonStyle";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NewPost() {
  const [postContent, setPostContent] = useState("");
  const [userId, setUserId] = useState(null);
  function handleInputChange(event) {
    setPostContent(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      post_id_user: userId,
      post_content: postContent,
    };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);
  return (
    <div className="default-card-center">
      <h3>
        <a>
          <FontAwesomeIcon icon={faPenNib} className="icon-btn btn-post-btn" />
        </a>
        NUEVA PUBLICACIÓN
      </h3>
      <div className="new-post-content">
        <input
          placeholder="ESCRIBIR POST..."
          type="text"
          name="inputPost"
          value={postContent}
          onChange={handleInputChange}
        />
      </div>
      <div className="insert">
        <div className="btn-post-btn-font">
          <SubmitButton
            type="submit"
            content="Enviar"
            title="Enviar"
            id="new-post-submit"
            className="btn-post-btn"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <span className="date"></span>
    </div>
  );
}
export default NewPost;