import React from 'react'
import { Link, graphql } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import styles from '../css/about.css'

import Layout from '../components/Layout'

export default (props) => {
    return(
        <Layout>
            <BackgroundImage
                className="masthead"
                fluid={props.data.indexImage.childImageSharp.fluid}
            >
                               
                  
            </BackgroundImage>
            <div>
            <p>I am a software engineer who can help bring your artistic vision to life. I live at the fusion of fine art, fashion and technology which lends me the ability to effectively blend functionality with flair. With my abundance of ideas and a repository of talents, I can educate brands on how to look fine online.  </p>
            </div>
            <h1 className="skillsheader">Skills</h1>
        <p>
        Python
        Django
        Javascript
        React
        NodeJS
        Express
        Passport
        jQuery
        HTML, CSS
        PostgreSQL
        MongoDB
        GitHub
        </p>
         
        </Layout>


    ) 
}


export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq: "aboutme.png"}) {
            childImageSharp {
                fluid(maxWidth: 1900, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }
`;