import React from 'react';
import Layout from "../layout/layout"
import { graphql } from 'gatsby';

 let AboutPage = props => {
   let _data = props.data;
  return (
    <Layout data={_data}>
      <h1>Hi, I am Hazelnut</h1>
      <p>
        More to come soon!
      </p>
    </Layout>
  )
}

export default AboutPage;

export let query = graphql`
  query About {
    site {
      siteMetadata {
        title
      }
    }
    file {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`