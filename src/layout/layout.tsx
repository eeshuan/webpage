import React from "react";
import layoutStyle from "./layout.module.scss";
import Header from "./header/header.tsx";
import Body from "./body/body.tsx";
import Footer from "./footer/footer.tsx";

let Layout = ({ children }) => {
  return (
    <div className={layoutStyle.layout}>
      <Header></Header>
      <Body>{children}</Body>
      <Footer></Footer>
    </div>
  );
}

export default Layout;