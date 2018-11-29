import React from 'react';
import Layout from "../layout/layout";

 let AboutPage = props => {
   /** Convert this to md */
   let _data = props.data;
  return (
    <Layout data={_data}>
      <h1>Hi, I am Shaun</h1>
      <h2>Work Experiences</h2>
      <p>
        <ul>
          Tech-Related
          <li>Autumn Interactive Pte Ltd - Current</li>

          Others
          <li>Sushi Tei Pte Ltd - F and B</li>
          <li>Singtel - Telemarketing</li>
          <li>Constant Wind Pte Ltd - Retail</li>
        </ul>
      </p>
    </Layout>
  )
}

export default AboutPage;