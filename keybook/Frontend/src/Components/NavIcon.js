import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavIcon({ link, icon, title }) {
  return (
    <li className="nav-item">
      <a className="dropdown-item active" href={link} title={title}>
        <FontAwesomeIcon icon={icon} className="icon" />
      </a>
    </li>
  );
}
