import React, { useState, useEffect } from "react";
import GrayScaleButton from "./GrayScaleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import NavBarIcon from "./NavBarIcon";
import {
  faCommentDots,
  faBell,
  faUser,
  faCog,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
import Logout from "./Logout";
import Logo from "./Logo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const navIcons = document.querySelector(".nav-icons");
    if (isMenuOpen) {
      navIcons.classList.add("activado");
    } else {
      navIcons.classList.remove("activado");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSearchVisible(window.innerWidth < 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navIcons = [
    { link: "#", icon: faCommentDots, title: "Mensajes" },
    { link: "#", icon: faBell, title: "Notificaciones" },
    { link: "profileLogged.html", icon: faUser, title: "Mi Perfil" },
    { link: "#", icon: faCog, title: "Configuración" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row nav-body">
            <Logo />

            <div className="d-none d-lg-block">
              <SearchBar />
            </div>
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
                {navIcons.map((icon) => (
                  <NavBarIcon
                    key={icon.title}
                    link={icon.link}
                    icon={icon.icon}
                    title={icon.title}
                  />
                ))}{" "}
                {/* Funcionalidad blanco y negro */}
                <li className="nav-item">
                  <GrayScaleButton className="dropdown-item active">
                    <FontAwesomeIcon
                      icon={faInfinity}
                      className="icon"
                      title="Blanco y Negro"
                    />
                  </GrayScaleButton>
                </li>
                {/*Logout*/}
                <li className="nav-item">
                  <Logout
                    className="dropdown-item active"
                    id="logout"
                    href="#"
                  ></Logout>
                </li>
                <li className="nav-item search-bar-dropdown d-lg-none  mx-auto">
                  <SearchBar />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
