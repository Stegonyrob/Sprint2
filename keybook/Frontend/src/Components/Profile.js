import React from 'react';

export default function Profile() {
  return (
    <>
      <main>
        {/* PERSONAL PROFILE */}
      
        <div id="cuenta">
          <div className="container-fluid main-structure">
            <div className="row">
              <div className="col-sm-5 col-md-4 col-lg-3">
                <div className="default-card education">
                  <h4>
                    <i
                      className="fa-solid fa-user-graduate icon"
                      title="Formacion"
                    />
                    FORMACION
                  </h4>
                  <ul className="profile-data">
                    <a id="formacion">
                      Escuela
                      <p>Títulación</p>
                    </a>
                  </ul>
                  <button className="btn btn-outline-warning btn-sm">Editar</button>
                </div>
                <div className="default-card languages">
                  <h4>
                    <i className="fa-solid fa-language icon" title="Idiomas" />
                    IDIOMAS
                  </h4>
                  <ul className="profile-data">
                    <a>
                      Idioma
                      <p>Nivel</p>
                    </a>
                  </ul>
                  <button className="btn btn-outline-warning btn-sm">Editar</button>
                </div>
                <div className="default-card habilidades">
                  <h4>
                    <i className="fa-solid fa-computer icon" title="Técnicas" />
                    HABILIDADES
                  </h4>
                  <ul className="profile-data">
                    <li>Listado de habilidades</li>
                  </ul>
                  <button className="btn btn-outline-warning btn-sm">Editar</button>
                </div>
              </div>
              <div className="col-sm-7 col-md-7 col-lg-6">
                <div className="default-card">
                  <div className="profile-details">
                    <div>
                      <div>
                        <h2 id="profile-fullName">Nombre completo</h2>
                        <input
                          type="button"
                          className="btn btn-outline-warning btn-sm"
                          defaultValue="Editar"
                          onclick="personalDetails()"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 id="profile-location">Ciudad, </h5>
                      <h5 id="profile-loc-country">País</h5>
                      <h5 id="profile-birthDate">Fecha nacimiento</h5>
                    </div>
                  </div>
                  <div className="user-bio profile-data">
                    <img
                      id="profile-avatar"
                      alt="avatar"
                      className="avatar avatar-perfil"
                    />
                    <p />
                  </div>
                </div>
                <div className="default-card">
                  <h4>
                    EXPERIENCIA LABORAL
                    <button className="btn btn-outline-warning btn-sm">
                      Editar
                    </button>
                  </h4>
                  <div className="profile-data">
                    <p>Lugar de trabajo | Fecha</p>
                    <p>Descripción del puesto</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-3">
                <div className="default-card contact">
                  <h4>
                    <i className="fa-solid fa-phone icon" title="Contacto" />
                    CONTACTO
                  </h4>
                  <ul className="profile-data">
                    <li id="profile-email">Correo</li>
                    <form
                      id="email-edit-form"
                      action="/users/${id}/email"
                      method="POST"
                    >
                      <input id="new-email" placeholder="EMAIL" type="email" />
                      <button
                        type="submit"
                        id="edit-email"
                        className=" btn btn-warning btn-sm"
                      >
                        Editar
                      </button>
                    </form>
                    <li id="profile-phone">Teléfono</li>
                    <form
                      id="phone-edit-form"
                      action="/users/${id}/phone"
                      method="POST"
                    >
                      <input id="new-phone" placeholder="TELEFONO" />
                      <button
                        type="submit"
                        id="edit-phone"
                        className=" btn btn-warning btn-sm"
                      >
                        Editar
                      </button>
                    </form>
                    <a
                      href="https://www.facebook.com/"
                      className="fa-brands fa-facebook icon"
                      title="Facebook"
                      target="”_blank”"
                    />
                    <a
                      href="https://www.linkedin.com/feed/"
                      className="fa-brands fa-linkedin icon"
                      title="Linkedin"
                      target="”_blank”"
                    />
                    <a
                      href="https://github.com/"
                      className="fa-brands fa-github icon"
                      title="GitHub"
                      target="”_blank”"
                    />
                  </ul>
                  <input
                    type="button"
                    className="btn btn-outline-warning btn-sm"
                    defaultValue="Editar"
                    onclick="contactInformation()"
                  />
                </div>
                <div className="default-card interests">
                  <h4>
                    <i className="fa-solid fa-person-walking icon" />
                    INTERESES
                  </h4>
                  <ul className="profile-data">
                    <li>Listado de intereses</li>
                  </ul>
                  <button className="btn btn-outline-warning btn-sm">Editar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="eliminar-cuenta" className="btn btn-danger">
          Eliminar cuenta
        </button>
      </main>   
    </>

  );
}

