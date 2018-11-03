import React from 'react';
import Layout from "../layout/layout"
import { graphql } from 'gatsby';

 let IndexPage = props => {
   let _data = props.data;
  return (
    <Layout data={_data}>
      <h1>Hello Hazelnut!</h1>
      <p>
        Boilerplate set up successfully!!! :D
      </p>
    </Layout>
  )
}

export default IndexPage;

export let query = graphql`
  query IndexPage {
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