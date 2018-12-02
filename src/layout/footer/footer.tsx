import React from "react";
import footerStyle from "./footer.module.scss";
import { Link } from "gatsby";

let Header = () => {
  return (
    <div className={footerStyle.footer}>
        <ul>
          <li><a href="https://www.facebook.com/shuan.ngee"><i className="fab fa-facebook fa-2x"></i></a></li>
          <li><a href="https://github.com/eeshuan"><i className="fab fa-github-square fa-2x"></i></a></li>
          <li><a href="mailto:ngeeshuan@hotmail.com"><i className="fas fa-envelope-square fa-2x"></i></a></li>
        </ul>
    </div>
  )
}

export default Header;