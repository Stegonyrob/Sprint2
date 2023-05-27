import React, { useState } from "react";
import SubmitButton from "../ButtonStyle";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getUser from "./GetUserforpost";

function NewPost() {
  const [postContent, setPostContent] = useState("");

  function handleInputChange(event) {
    setPostContent(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const userId = await getUser();
    const data = {
      post_id_user: userId,
      post_content: postContent,
    };

    console.log(data);

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        const errorText = await response.text();
        console.log(errorText);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="default-card-center">
      <form id="write-new-post" onSubmit={handleSubmit} noValidate>
        <h3>
          <a>
            <FontAwesomeIcon
              icon={faPenNib}
              className="icon-btn btn-post-btn"
            />
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
            />
          </div>
        </div>
        <span className="date"></span>
      </form>
    </div>
  );
}

export default NewPost;
