import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHome,
  faUser,
  faCog,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faSignOutAlt);
library.add(faAddressBook, faHome, faUser, faCog, faInfinity);
export default { FontAwesomeIcon };
