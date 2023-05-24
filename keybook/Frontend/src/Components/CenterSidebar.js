import React from "react";
import { format } from "date-fns";

function PostList(props) {
  return (
    <div className="col-sm-7 col-md-7 col-lg-6">
      <div className="new-post-card default-card">
        <h3>
          <i className="fa-solid fa-pen-nib icon" title="Nueva publicación"></i>
          NUEVA PUBLICACIÓN
        </h3>
        <form onSubmit={props.handleSubmit} noValidate>
          <textarea
            value={props.content}
            onChange={(event) => props.setContent(event.target.value)}
            className="new-post"
            cols="70"
            rows="2"
            placeholder="ESCRIBIR POST..."
          ></textarea>
          <div className="insert">
            <i className="fa-solid fa-image icon"></i>
            <i className="fa-solid fa-location-dot icon"></i>
            <i className="fa-solid fa-file icon"></i>
            <button type="submit" className="btn-post btn btn-warning btn-sm">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <section id="post-list">
        {props.posts.map((post) => (
          <div key={post.id} className="default-card">
            <div className="post-author">
              <img
                src={post.author.avatarUrl}
                alt="avatar"
                className="avatar"
              />
              <h4>{post.author.name}</h4>
            </div>
            <p>{post.content}</p>

            <button className="buttonLike fa-solid fa-heart btn btn-lg "></button>
            <span className="count">{post.likes} Me gusta</span>
            <span className="date">
              {format(post.createdAt, "dd/MM/yyyy HH:mm")}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PostList;
