import React from "react";
import Link from 'gatsby-link';
import headerStyle from "./header.module.scss";

let Header = (data) => {
  return (
    <div className={headerStyle.header}>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Portfolio</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </nav>
    </div>
  )
}

export default Header;