import React from 'react'
import {
    Link,
    graphql
} from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/Layout'


export default (props) => {
    return ( <
        Layout >
        <
        BackgroundImage className = "masthead"
        fluid = {
            props.data.indexImage.childImageSharp.fluid
        } >


        <
        /BackgroundImage>


        <
        /Layout>


    )
}


export const pageQuery = graphql `
    query {
        indexImage: file(relativePath: { eq: "2.png"}) {
            childImageSharp {
                fluid(maxWidth: 1900, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }
`;