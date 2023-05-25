import React from "react";

function PostCard({ post }) {
  return (
    <div className="default-card">
      <div className="post-author">
        <div className="post-card">
          <img
            src={post.user_profile_picture}
            alt="Avatar"
            className="avatar"
          />
          {post.post_content}
          <a title={`Perfil ${post.user_name}`}></a>
          <button className="reply btn btn-warning">Responder</button>
          <div className="reply" style={{ display: "none" }}>
            <textarea rows="2" cols="70"></textarea>
            <button className="send-reply btn btn-warning">
              Enviar respuesta
            </button>
            <button className="close-reply btn btn-warning" id="close-button">
              Cerrar
            </button>
          </div>
          <button className="buttonLike fa-solid fa-heart btn btn-lg ">
            Like
          </button>
          <span className="count">0 Me gusta</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
