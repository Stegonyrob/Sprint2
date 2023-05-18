import { useState } from "react";
import GrayScaleButton from "./GrayScaleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCommentDots,
  faBell,
  faUser,
  faCog,
  faInfinity,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // useState se utiliza para definir una variable de estado isMenuOpen y una función para actualizar
  //  el estado setIsMenuOpen. Se inicializa con un valor de false.

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // toggleMenu es una función que se utiliza para cambiar el valor de isMenuOpen.
  // Si isMenuOpen es true, se cambia a false, y si es false, se cambia a true.

  return (
    /*BARRA DE NAVEGACIÓN*/
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row nav-body">
            {/* Logo */}
            <div className="col">
              <a className="navbar-brand" href="home.html">
                <img
                  src="../img/logo2.png"
                  alt="Logo"
                  className="keybook-logo d-block"
                />
              </a>
            </div>
            {/* Search bar */}
            <div className="col-8 search-bar d-none d-lg-block">
              <form className="d-flex">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <input
                      className="form-control me-2 search-content-input"
                      type="search"
                      placeholder="Búsqueda..."
                      aria-label="Buscar"
                      size={50}
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="icon search-icon"
                    />
                  </span>
                </div>
              </form>
            </div>

            {/* Hamburger dropdown */}
            <div className="col-3 col-sm-1">
              <button
                className={`navbar-toggler ${isMenuOpen ? "girar" : ""}`}
                type="button"
                onClick={toggleMenu}
              >
                <span className={`br-1 ${isMenuOpen ? "animado" : ""}`}></span>
                <span className={`br-2 ${isMenuOpen ? "animado" : ""}`}></span>
                <span className={`br-3 ${isMenuOpen ? "animado" : ""}`}></span>
              </button>
            </div>
            <div className="col-1"></div>
            <div
              className={`collapse navbar-collapse col-sm-7 col-lg-6 ${
                isMenuOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              <div
                className="overlay"
                style={{ display: isMenuOpen ? "block" : "none" }}
              ></div>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-icons">
                {/*  Mensajes*/}
                <li className="nav-item">
                  <a
                    className="dropdown-item active"
                    aria-current="page"
                    href="#"
                  >
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="icon"
                      title="Mensajes"
                    />
                  </a>
                </li>
                {/* Notificaciones */}
                {/* import React from 'react';
export const InputRegister = ({ label, type, id, name, onChange, value }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-11">
                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input
                    value={value}
                     onChange={onChange}
                        name={name}
                        id={id}
                        type={type}
                        className="form-control"
                        required
                    />
                </div>
            </div>
        </div>
    )
}


<InputRegister label="Contraseña"
                        type="password"
                        onChange={handleChange} value={keys.password} name="password" /> */}
                <li className="nav-item">
                  <a
                    className="dropdown-item active"
                    aria-current="page"
                    href="#"
                  >
                    <FontAwesomeIcon
                      icon={faBell}
                      className="icon"
                      title="Notificaciones"
                    />
                  </a>
                </li>

                {/* Perfil */}

                <li className="nav-item">
                  <a
                    className="dropdown-item active"
                    aria-current="page"
                    href="profileLogged.html"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="icon"
                      title="Mi Perfil"
                    />
                  </a>
                </li>
                {/* Configuración */}
                <li className="nav-item">
                  <a className="dropdown-item active" href="#">
                    <FontAwesomeIcon
                      icon={faCog}
                      className="icon"
                      title="Configuración"
                    />
                  </a>
                </li>

                {/* Funcionalidad blanco y negro */}
                <li className="nav-item">
                  <GrayScaleButton className="dropdown-item active">
                    <div className="infinity-button">
                      <FontAwesomeIcon
                        icon={faInfinity}
                        className="icon"
                        title="Blanco y Negro"
                      />
                    </div>
                  </GrayScaleButton>
                </li>

                {/*Logout*/}
                <li className="nav-item">
                  <a
                    className="dropdown-item active"
                    id="logout"
                    onClick="logout()"
                  >
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="icon"
                      title="Desconectarse"
                    />
                  </a>
                </li>

                <li className="navbar-nav ms-auto mt-2">
                  <div className="col-8 search-bar d-lg-none mx-auto">
                    <form className="d-flex">
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon2">
                          <input
                            className="form-control me-2 search-content-input"
                            type="search"
                            placeholder="Búsqueda..."
                            aria-label="Buscar"
                            size={50}
                          />
                          <FontAwesomeIcon
                            icon={faSearch}
                            className="icon search-icon"
                          />
                        </span>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
