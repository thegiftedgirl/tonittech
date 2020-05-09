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
            <p>I live at the fusion of fine art and technology. As an art teacher by day I have the opportunity of broadening young minds through multiple artistic forms. I would like to expand upon my creative capabilities through technology by developing software for artists and educators alike. Preferably working in an environment where big ideas are nurtured and innovation is consistently encouraged. </p>
            
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