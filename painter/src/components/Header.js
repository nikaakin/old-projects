import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <Link to="/">Home</Link>
        <Link to="/painter">Painter</Link>
        <Link to="/github-api">github Api</Link>
        <Link to="/test">Test</Link>
      </div>
    );
  }
}

export default Header;
