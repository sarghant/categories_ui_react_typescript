import styles from "./module_css/Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline, IoHomeOutline } from "react-icons/io5";

const iconColor = "hsl(var(--primary-hue) 35% 95% / .8)";
const iconProps = {
  color: iconColor,
  size: "20",
};

export function Sidebar() {
  const currentPath = useLocation().pathname;
  return (
    <div
      className={`${styles.sidebar} flex align-items-center justify-content-center px-2`}
    >
      <ul>
        <li className="mb-3">
          <Link
            to="/"
            className={`${styles["btn-link"]} py-2 ${
              currentPath === "/" ? styles.active : ""
            }`}
          >
            <IoHomeOutline color={iconColor} size="22" />
          </Link>
        </li>
        <li className="mb-3">
          <Link
            to="/search"
            className={`${styles["btn-link"]} py-2 ${
              currentPath === "/search" ? styles.active : ""
            }`}
          >
            <IoSearchOutline color={iconColor} size="22" />
          </Link>
        </li>
        {/* <li>
          <button className={`${styles.btn} py-2`}>
            <IoCreateOutline color={iconColor} size="22" />
          </button>
        </li> */}
      </ul>
    </div>
  );
}
