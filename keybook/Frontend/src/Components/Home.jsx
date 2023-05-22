import React from 'react';
import Footer from '../Components/Footer';
import NavBar from './NavBar';
function Home() {
  return (
    <>      
      <main>
   
        {/*Menu lateral izquierda*/}
        <div className="container-fluid main-structure">
          <div className="row">
            <div className="col-sm-5 col-md-4 col-lg-3">
              <div className="default-card profile-index">
                <a title="Mi perfil" href="../html/profileLogged.html">
                  <img
                    id="profile-logged-image"
                    alt="avatar"
                    className="avatar avatar-perfil"
                  />
                </a>
                <p id="profile-logged" />
              </div>
              <div className="default-card">
                <h4>
                  <a
                    className="fa-regular fa-address-book icon"
                    href="usersGrid.html"
                    title="Amigos"
                  />
                  AMIGOS
                </h4>
                <ul>
                  <li>
                    <a href="" title="Perfil Adrian">
                      <img
                        src="../img/avatares/adrian.png"
                        alt="Avatar"
                        className="avatar"
                      />
                    </a>
                    Adrian
                  </li>
                  <li>
                    <a href="" title="Perfil Lucia">
                      <img
                        src="../img/avatares/lucia.png"
                        alt="Avatar"
                        className="avatar"
                      />
                    </a>
                    Lucia
                  </li>
                  <li>
                    <img
                      src="../img/avatares/stella.png"
                      alt="Avatar"
                      className="avatar"
                    />
                    Stella
                  </li>
                </ul>
              </div>
              <div className="default-card">
                <h4>
                  <i className="fa-solid fa-person icon" title="Solicitudes" />
                  SOLICITUDES
                </h4>
                <ul>
                  <li>
                    <img
                      src="../img/avatares/rafael.png"
                      alt="avatar"
                      className="avatar"
                    />
                    Rafael
                  </li>
                  <input
                    type="button"
                    defaultValue="Aceptar"
                    className="btn btn-outline-warning btn-sm"
                  />
                  <input
                    type="button"
                    defaultValue="Denegar"
                    className="btn btn-outline-danger btn-sm"
                  />
                  <li>
                    <img
                      src="../img/avatares/antonio.png"
                      alt="avatar"
                      className="avatar"
                    />
                    Antonio
                  </li>
                  <input
                    type="button"
                    defaultValue="Aceptar"
                    className="btn btn-outline-warning btn-sm"
                  />
                  <input
                    type="button"
                    defaultValue="Denegar"
                    className="btn btn-outline-danger btn-sm"
                  />
                  <li>
                    <img
                      src="../img/avatares/cristina.png"
                      alt="avatar"
                      className="avatar"
                    />
                    Cristina
                  </li>
                  <input
                    type="button"
                    defaultValue="Aceptar"
                    className="btn btn-outline-warning btn-sm"
                  />
                  <input
                    type="button"
                    defaultValue="Denegar"
                    className="btn btn-outline-danger btn-sm"
                  />
                </ul>
              </div>
            </div>
            {/*Contenido CENTRO*/}
            <div className="col-sm-7 col-md-7 col-lg-6">
              <div className="new-post-card default-card">
                <h3>
                  <i
                    className="fa-solid fa-pen-nib icon"
                    title="Nueva publicación"
                  />
                  NUEVA PUBLICACIÓN
                </h3>
                <form
                  id="write-new-post"
                  action="/posts"
                  method="POST"
                  noValidate=""
                >
                  <textarea
                    id="new-post-content"
                    className="new-post"
                    cols={70}
                    rows={2}
                    placeholder="ESCRIBIR POST..."
                    defaultValue={""}
                  />
                  <div className="insert">
                    <i className="fa-solid fa-image icon" />
                    <i className="fa-solid fa-location-dot icon" />
                    <i className="fa-solid fa-file icon" />
                    <button
                      type="submit"
                      id="send-new-post"
                      className="btn-post btn btn-warning btn-sm"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
              {/* Muro */}
              <section id="post-list" />
              {/* posts */}
              <ul id="posts" />
              <article />
              <div className="default-card">
                <div className="post-author">
                  <img
                    src="../img/avatares/alicia.png"
                    alt="avatar"
                    className="avatar"
                  />
                  <h4>Alicia</h4>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                  velit, suscipit ratione dolore, quibusdam praesentium at amet
                  adipisci nihil similique tempore aspernatur? Nulla officiis veniam
                  possimus repudiandae enim! Est, cumque.
                </p>
                <button className="reply btn btn-warning">Responder</button>
                <div className="reply" style={{ display: "none" }}>
                  <textarea rows={2} cols={70} defaultValue={""} />
                  <button className="send-reply btn btn-warning">
                    Enviar respuesta
                  </button>
                  <button className="close-reply btn btn-warning" id="close-button">
                    Cerrar
                  </button>
                </div>
                <button className="buttonLike fa-solid fa-heart btn btn-lg " />
                <span className="count">0 Me gusta</span>
              </div>
            </div>
            {/*Menu lateral derecha*/}
            <div className="col-sm-5 col-md-4 col-lg-3">
              <div className="default-card">
                <h4>
                  <i
                    className="fa-solid fa-group-arrows-rotate icon"
                    title="Grupos"
                  />
                  GRUPOS
                </h4>
                <ul>
                  <li>
                    <img
                      src="https://images.jrdevjobs.com/logos/jr-dev-jobs-logo-square-500.png"
                      alt="logo principiantes"
                      className="logo"
                    />
                    Principiantes
                  </li>
                  <li>
                    <img src="https://media.licdn.com/dms/image/C4E0BAQF9gLGZX0K8kw/company-logo_200_200/0/1616607138831?e=1692230400&v=beta&t=qMsXcUFGakQ5eo3tTX9idgP_BM_ieWoAT854IuDcUHo" alt="logo tecla" className="logo" />
                    Teclers
                  </li>
                  <li>
                    <img
                      src="https://ensenada.eu/wp-content/uploads/2023/01/ENSENADA-logo.png"
                      alt="logo ensenada"
                      className="logo"
                    />
                    Ensenada
                  </li>
                </ul>
              </div>
              <div className="default-card">
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
                              <img
                                src=""
                                alt="..."
                              />
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
              </div>
            </div>
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
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}

export default Home;