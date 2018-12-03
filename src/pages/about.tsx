import React from 'react';
import Layout from "../layout/layout";
import { graphql } from 'gatsby';
import style from "./about.module.scss";
import Image from "gatsby-image";

 let AboutPage = props => {
   /** Convert this to md */
   let _data = props.data;
   let profileImageData = _data.profile.edges[0].node.childImageSharp.fixed;
   let autumnData = _data.autumn.edges[0].node.childImageSharp.fixed;
   let nusData = _data.nus.edges[0].node.childImageSharp.fixed;
  return (
    <Layout data={_data}>
      <div className={style.about}>
        <div className={style.head}>
          <div className={style.profile}>
            <Image fixed={profileImageData}/>
          </div>
          <ul className={style.bio}>
            <li>Name: Shuan</li>
            <li>Age: 25</li>
            <li>Location: Singapore</li>
          </ul>
        </div>
        <hr></hr>
        <div className={style.intro}>
        <h1>About</h1>
        <p>
          Hi, I am Shuan. I graduated from the National University of Singapore with
          a Bachelor of Computing degree. I have a deep interest in web programming and game development,
          and is constantly trying out new frameworks. I like designing applications and will always do my
          best to give the application the best User Experience possible. I also love working in a team,
          where I can share design ideas from my experiences with everyone.
        </p>          
        </div>
        <hr></hr>
        <div className={style.work}>
        <h1>Work Experiences</h1>
        <ul>
          <li>
            {createWorkList(
              autumnData,
              "Autumn Interactive Pte Ltd",
              "Nov 2017 - Current",
              `Working as a junior game developer, focusing mainly on front-end features and structures.
              In charge of maintaining and developing features for the company's game engine. Work closely with clients
              from overseas such as Taiwan and Vietnam.`
            )}
          </li>
        </ul>   
        </div>
        <hr></hr>
        <div className={style.education}>
        <h1>Education</h1>
        <ul>
          <li>
            {createEducationList(
              nusData,
              "National University of Singapore",
              "August 2014 - April 2018",
              `Pursued and graduated with a degree in Bachelor of Computing in NUS.`
            )}
          </li>
        </ul>   
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage;

function createWorkList(imageData, company: string, years: string, content: string) {
  return (
    <div>
      <div className={style.workImages}>
        <Image fixed={imageData}/>
      </div>
      <div className={style.workInfo}>
        <h3>{company}</h3>
        <h4>{years}</h4>
      </div>
      <div className={style.workContent}>
        <p>{content}</p>
      </div>
    </div>
  );
}

function createEducationList(imageData, company: string, years: string, content: string) {
  return (
    <div>
      <div className={style.workImages}>
        <Image fixed={imageData}/>
      </div>
      <div className={style.workInfo}>
        <h3>{company}</h3>
        <h4>{years}</h4>
      </div>
      <div className={style.workContent}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export let query = graphql`
  query AboutPage {
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
    autumn: allFile (filter: {relativePath: {regex: "/autumn-interactive/"}}) {
      edges {
        node {
          childImageSharp {
            fixed (width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    nus: allFile (filter: {relativePath: {regex: "/nus/"}}) {
      edges {
        node {
          childImageSharp {
            fixed (width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`