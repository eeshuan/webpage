import React from "react";
import layoutStyle from "./layout.module.scss";
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";
import Helmet from "react-helmet";

let Layout = props => {
  let children = props.children;
  return (
    <React.Fragment>
      <div className={layoutStyle.layout}>
        <Header></Header>
        <Body>{children}</Body>
        <Footer></Footer>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </React.Fragment>
  );
}

export default Layout;