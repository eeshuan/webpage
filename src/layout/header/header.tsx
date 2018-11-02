import React from "react";
import { graphql } from "gatsby";
import Link from 'gatsby-link';
import Image from "gatsby-image";
import headerStyle from "./header.module.scss";

let Header = ({ data }) => {
  console.log(data);
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.pageTitle}>
        <Link to='/'>Image</Link>
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

// export let query = graphql`
//   query Header {
//     file(relativePath: { eq: "icon.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `