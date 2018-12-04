import React from 'react';
import Layout from "../layout/layout";
import style from "./contact.module.scss";

let ContactPage = props => {
   /** Convert this to md */
   let _data = props.data;
  return (
    <Layout data={_data}>
      <div className={style.contact}>
        <div className={style.title}>
          Contact
        </div>
        <div className={style.quote}>
          Let's get to know each other!
        </div>
        <hr></hr>
        <div className={style.content}>
          <p>
            Maybe if you prefer to <a href="mailto:ngeeshuan@hotmail.com">Email</a>?
          </p>
          <p className={style.links}>
          <a href="mailto:ngeeshuan@hotmail.com">ngeeshuan(@)hotmail(dot)com</a>
          </p>
          <p>
            Or you can drop me a message at my <a href="https://www.facebook.com/shuan.ngee">Facebook</a>
          </p>
          <p className={style.links}>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage;