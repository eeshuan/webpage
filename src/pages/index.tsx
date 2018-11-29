import React from 'react';
import Layout from "../layout/layout"
import { graphql } from 'gatsby';
import Carousel from "../components/carousel"

 let IndexPage = props => {
   let _data = props.data;
  //  console.log(_data);
  return (
    <Layout data={_data}>
      <Carousel data={{images: _data.carouselImages.edges}}/>
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
    carouselImages: allFile (filter: {relativePath: {regex: "/carousel/"}}, sort: {fields: name, order: ASC}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 960, height: 540, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`