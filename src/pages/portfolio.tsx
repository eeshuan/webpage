import React from 'react';
import Layout from "../layout/layout";
import style from "./portfolio.module.scss";
import { graphql } from 'gatsby';
import Image from "gatsby-image";

let PortfolioPage = props => {
   /** Convert this to md */
   let _data = props.data;
   console.log(_data);
  return (
    <Layout data={_data}>
      <div className={style.portfolio}>
        <div className={style.title}>
            My Works
        </div>
        {createProjectCard(
            "This Website",
            `I was inspired to create my own website when i was exposed to web programming frameworks such as
            reactjs. I started on a small scale, playing with the tools available to me, and slowly expanding this
            website (It is still being improved right now :D). I aim to be able to show and apply my skills to this
            website for everyone to see.`,
            undefined,
            "https://github.com/eeshuan/webpage"
        )}
        {createProjectCard(
            "Angry Angry Pig",
            `Angry Angry Pig was created for #gameoff2018 hosted by GitHub. The game was created by one
            programmer and one artist, and was done within 48hrs. It was created on HTML and as a browser
            playable game.`,
            _data.angryPig.edges,
            "https://hazeelnut.itch.io/angry-angry-pig"
        )}
        {createProjectCard(
            "PurgaStory",
            `PurgaStory was created for NUS 11th STEPS, by a team of 7 members. The game was built on
            Unreal Engine 4 and was completed over a period of 16 weeks. This is the first game I had ever built,
            and it really gave me a very good ideaof what is the game development world. I enjoyed the whole process
            of brainstorming and sharing of ideas and game mechanics with my team.`,
            _data.purgastory.edges,
            "https://gamejolt.com/games/purgastory/257110"
        )}
      </div>
    </Layout>
  )
}

export default PortfolioPage;

function createProjectCard(title: string, desc: string, images, link: string) {
    return (
        <div className={style.card}>
            <div className={style.content}>
                <div className={style.cardTitle}>
                    {title}
                </div>
                <div className={style.cardDesc}>
                    {desc}
                </div>
                <div className={style.cardImages}>
                    {(images !== undefined) ? createCardImages(images): undefined}
                </div>
                <div className={style.cardLink}>
                    {(link !== undefined) ? <div>Link to Project: <a href={link}>Link</a></div> : undefined}
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

function createCardImages(images) {
    console.log(images);
    return (
        <div>
            {images.map((element, index) => {
                return (
                    <span className={style.cardImageStyle} key={index}>
                        <Image fixed={element.node.childImageSharp.fixed}/>
                    </span>
                );
            })}
        </div>
    );
}


export let query = graphql`
query PortfolioPage {
    angryPig: allFile (filter: {relativePath: {regex: "/works/angry-pig/images/"}}, sort: {fields: name, order: ASC}) {
        edges {
            node {
                childImageSharp {
                    fixed (width: 200, height: 100) {
                        ...GatsbyImageSharpFixed
                      }
                }
            }
        }
    }
    purgastory: allFile (filter: {relativePath: {regex: "/works/purgastory/images/"}}, sort: {fields: name, order: ASC}) {
        edges {
            node {
                childImageSharp {
                    fixed (width: 200, height: 100) {
                        ...GatsbyImageSharpFixed
                      }
                }
            }
        }
    }
}
`