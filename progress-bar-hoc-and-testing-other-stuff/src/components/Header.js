import "../css/header.css";
import { Link } from "react-router-dom";
import { pages } from "./PageManager";

const Header = () => {
  return (
    <div className="header-wrapper">
      {Object.keys(pages).map((page) => {
        return (
          <li key={page}>
            <Link to={page}>{page.length === 0 ? "root" : page}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Header;
