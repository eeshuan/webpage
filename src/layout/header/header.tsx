import React from "react";
import { graphql } from "gatsby";
import Link from 'gatsby-link';
import Image from "gatsby-image";
import headerStyle from "./header.module.scss";

let Header = (data) => {
  let imageSrc = data.image;
  let title = data.title;
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.pageTitle}>
        <Link to='/'>
          <Image fixed={imageSrc}></Image>{title}
        </Link>
      </div>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </nav>
    </div>
  )
}

export default Header;