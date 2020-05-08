import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

import githublogo from '../images/githublogo.png'
import gmaillogo from '../images/gmaillogo.png'
import linkedinlogo from '../images/linkedinlogo.png'
import galogo from '../images/galogo.png'
import  styles from '../css/contacts.css'


export default (props) => {
return (
    <Layout> 
       <h1>Contact Me </h1>
        <section className={styles.contacts}>       
                
                <ul>
            
                <li><img src={gmaillogo} alt="gmaillogo" className="icon"/> tonitenneil@gmail.com</li>
                <li><a href="https://github.com/thegiftedgirl" target="__blank" ><img src={githublogo} alt="githublogo" className="icon" />GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/tonitenneilhorne/" target="__blank" ><img src={linkedinlogo} alt="linkedinlogo" className="icon" />linkedin</a></li>
                <li><a href="https://profiles.generalassemb.ly/profiles/tonitenneil" target="__blank" ><img src={galogo} alt="galogo" className="icon" />GA Profile</a></li>
                </ul> 
    
        </section>

        <Link to="/about">back to my bio</Link>
    </Layout>
    
    )
}

 
export const pageQuery = graphql`
    query {
        indexImage: file(relativePath: { eq: "aboutme.png"}) {
            childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            } 
        }
    }
`;