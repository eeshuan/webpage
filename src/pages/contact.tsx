import React from 'react';
import Layout from "../layout/layout";

 let ContactPage = props => {
   /** Convert this to md */
   let _data = props.data;
  return (
    <Layout data={_data}>
      <p>
        Email: ngeeshuan at hotmail dot com
        </p>
        <p>
        Tele: nine six seven seven one six two seven
      </p>
    </Layout>
  )
}

export default ContactPage;