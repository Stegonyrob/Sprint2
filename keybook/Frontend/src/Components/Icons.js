import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIconName } from "@fortawesome/free-solid-svg-icons";

const CustomIcon = ({ iconName, iconClass, iconTitle }) => {
  const iconPrefix = "fas";
  const icon = faIconName;

  return (
    <a className={`dropdown-item active ${iconClass}`} href="#">
      <FontAwesomeIcon
        icon={[iconPrefix, icon]}
        className="icon"
        title={iconTitle}
      />
    </a>
  );
};
export default CustomIcon;
