import React from "react";
import bodyStyle from "./body.module.scss";

let Body = ({ children }) => {
  return (
    <div className={bodyStyle.body}>
        {children}
    </div>
  )
}

export default Body;