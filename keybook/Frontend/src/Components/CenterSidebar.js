import React from "react";
import { FormInput } from "./FormInput";
import { ButtonDefault } from "./ButtonDefault";
import { faLocationDot, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LikeDislike from "./ButtonLikeDislike";

function handleClick() {
  const location = "New York";
  router.post("/locations", { location }).then((response) => {
    console.log(response.data);
  });
}

function handleUpload(event) {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("image", file);
  router.post("/upload", formData).then((response) => {
    console.log(response.data);
  });
}

function PostList() {
  return (
    <div className="default-card ">
      <section id="post-list">
        <h4>PUBLICACIONES</h4>
        <form id="write-new-post" action="/posts" method="POST" novalidate>
          <FormInput
            id="new-post-content"
            className="new-post"
            cols="70"
            rows="2"
            placeholder="ESCRIBIR POST..."
            type="text"
            // onChange={handleChange}
            // value={userInfo.post}
            name="post"
          />
          <div className="insert">
            <ButtonDefault
              type="submit"
              content="Enviar"
              title="Enviar"
              id="send-new-post"
              className="btn-post btn btn-warning buttonLike btn-sm"
            />

            {/* <input
              type="file"
              id="image-input"
              onChange={(event) => handleUpload(event)}
            /> */}
            <ButtonDefault
              type="button"
              onClick={() => handleClick()}
              content={<FontAwesomeIcon icon={faImage} />}
              id="register-form-buttons"
              title="Upload image"
            />
            <ButtonDefault
              type="button"
              onClick={() => handleClick()}
              content={<FontAwesomeIcon icon={faLocationDot} />}
              id="register-form-buttons"
              title="Insert location"
            />
            <LikeDislike />
          </div>

          <span className="date"></span>
        </form>
      </section>
    </div>
  );
}

export default PostList;
