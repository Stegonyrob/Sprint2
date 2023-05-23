import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faAddressBook,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const CogIcon = () => {
  return <FontAwesomeIcon icon={faCog} />;
};

const UsersGrid = () => {
  return <FontAwesomeIcon icon={faAddressBook} />;
};

const HomeIcon = () => {
  return <FontAwesomeIcon icon={faHome} />;
};

const Profile = () => {
  return <FontAwesomeIcon icon={faUsers} />;
};

export default { CogIcon, UsersGrid, HomeIcon, Profile };
