import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import PostList from "./CenterSidebar";
import "../App.css";

export default function Home() {
  return (
    <>
      {/*Menu lateral izquierda*/}
      <LeftSidebar />
      {/*Contenido CENTRO*/}
      {/* <PostList /> */}
      {/*Menu lateral derecha*/}

      <RightSidebar />
      <h4>
        <i className="fa-solid fa-book icon" title="Paginas" />
        PAGINAS
      </h4>
      <ul>
        <li>
          <div className="img-post">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-pause="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                >
                  <span />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                >
                  <span />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                >
                  <span />
                </button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="https://www.w3schools.com/" target="_blank">
                    <img src="" alt="..." />
                  </a>
                </div>
                <div className="carousel-item">
                  <a href="https://lenguajecss.com/ " target="_blank">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="carousel-item">
                  <a href="https://www.google.es/" target="_blank">
                    <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" />
                  </a>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </li>
      </ul>

      {/* CHAT */}
      <div className="chat position-fixed bottom-0 end-0">
        <input type="checkbox" id="chat-open" />
        <label htmlFor="chat-open" className="btn btn-warning btn-sm">
          Abrir chat
        </label>
        <div className="chat-popup" id="openchatform">
          {/* base para el envio de mensajes */}
          <form action="/action_page.php" className="chat-form-container">
            <h1>Chat</h1>
            <textarea
              placeholder="Escribe el mensaje.."
              name="msg"
              required=""
              defaultValue={""}
            />
            <button type="submit" className="btn btn-success btn-sm">
              Enviar
            </button>
            <label htmlFor="chat-open" className="btn btn-danger btn-sm">
              Cerrar
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
