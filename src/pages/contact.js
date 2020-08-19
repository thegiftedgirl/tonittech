import React from 'react'
import {
    Link,
    graphql
} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/Layout'

import githublogo from '../images/githublogo.png'
import gmaillogo from '../images/gmaillogo.png'
import linkedinlogo from '../images/linkedinlogo.png'
import galogo from '../images/galogo.png'
import styles from '../css/contacts.css'


export default (props) => {
    return ( <
        Layout >
        <
        BackgroundImage className = "masthead"
        fluid = {
            props.data.indexImage.childImageSharp.fluid
        } >
        <
        h1 className = "contactheader" > Lets Connect! < /h1>

        <
        li > < img src = {
            gmaillogo
        }
        alt = "gmaillogo"
        className = "icon" / > tonitenneil @gmail.com < /li> <
        li > < a href = "https://github.com/thegiftedgirl"
        target = "__blank" > < img src = {
            githublogo
        }
        alt = "githublogo"
        className = "icon" / > GitHub < /a></li >
        <
        li > < a href = "https://www.linkedin.com/in/tonitenneilhorne/"
        target = "__blank" > < img src = {
            linkedinlogo
        }
        alt = "linkedinlogo"
        className = "icon" / > linkedin < /a></li >


        <
        /BackgroundImage> <
        /Layout>

    )
}


export const pageQuery = graphql `
    query {
        indexImage: file(relativePath: { eq: "contactprofile.png"}) {
            childImageSharp {
                fluid(maxWidth: 1500, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }
`;