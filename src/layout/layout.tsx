import React from "react";
import layoutStyle from "./layout.module.scss";
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";

let Layout = props => {
  let children = props.children;
  let _data = props.data;
  return (
    <div className={layoutStyle.layout}>
      <Header title={_data.site.siteMetadata.title}
              image={_data.file.childImageSharp.fixed}
      ></Header>
      <Body>{children}</Body>
      <Footer></Footer>
    </div>
  );
}

export default Layout;