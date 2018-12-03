import React from 'react';
import Layout from "../layout/layout"
import { graphql } from 'gatsby';
import Carousel from "../components/carousel"
import style from "./index.module.scss";
import Image from "gatsby-image";

 let IndexPage = props => {
   let _data = props.data;
   console.log(_data);
  return (
    <Layout data={_data}>
      <Carousel data={{images: _data.carouselImages.edges}}/>
      <div className={style.intro}>
        <div className={style.profile}>
          <Image fixed={_data.profile.edges[0].node.childImageSharp.fixed}/>
        </div>
        <p className={style.me}>
            Hi, i am Shuan!
        </p>
        <p className={style.about}>
            I'm an aspiring developer!
        </p>
      </div>
      <hr></hr>
      <div className={style.bio}>
        <h1>About me</h1>
        <ul>
          <li>I am a junior developer based in Singapore</li>
          <li>My primary interests are doing web and games development</li>
          <li>I like to explore ways to perfect User Experiences</li>
          <li>I love brainstorming and sharing design ideas with a group</li>
          <li>I am constantly upgrading myself with new programming skills</li>
        </ul>
        <p>
           
        </p>
      </div>
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
            fixed(width: 1440, height: 700, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    profile: allFile (filter: {relativePath: {regex: "/about/"}}) {
      edges {
        node {
          childImageSharp {
            fixed (width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`