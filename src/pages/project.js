import React from 'react'
import { graphql } from "gatsby"

import foodziess1 from '../images/foodziess1.png'
import weatherornotshot from '../images/weatherornotshot.png'
import overtherainbow from '../images/overtherainbow.png'
import homeroomshot from '../images/homeroomshot.png'
import Layout from '../components/Layout'




export default ({ data }) => {
return(
      <Layout>
        <h1>Projects</h1>

       <img src= {homeroomshot}  alt="projects"/>
              <p>homeroom</p>
       <img src= {foodziess1} alt="projects"/>
              <p>foodzies</p>
        <img src= { weatherornotshot } alt="projects" />
              <p> weatherornot </p>
          <img src={ overtherainbow } alt="projects" />
              <p> over the rainbow </p>

        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq: ""}) {
            childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }
`;


