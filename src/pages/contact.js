import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/Layout'

import githublogo from '../images/githublogo.png'
import gmaillogo from '../images/gmaillogo.png'
import linkedinlogo from '../images/linkedinlogo.png'
import galogo from '../images/galogo.png'

export default (props) => {
return (
    <Layout> 
          <BackgroundImage
                className="masthead"
                fluid={props.data.indexImage.childImageSharp.fluid}
            >
            
             <container>       
                <h1>Contact Me </h1>
                <ul>
                <img src={gmaillogo} alt="gmaillogo"/>: tonihorne@me.com
                <li><a href="https://github.com/thegiftedgirl" target="__blank"><img src={githublogo} alt="githublogo"/>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/tonitenneilhorne/" target="__blank"><img src={linkedinlogo} alt="linkedinlogo"/>linkedin</a></li>
                <li><a href="https://profiles.generalassemb.ly/profiles/tonitenneil" target="__blank"><img src={galogo} alt="galogo"/>GA Profile</a></li>
                </ul> 
                </container> 
            </BackgroundImage>
        <Link to="/about">back to my bio</Link>
    </Layout>
    
    )
}


export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq: "bk3.png"}) {
            childImageSharp {
                fluid(maxWidth: 1900, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }
`;