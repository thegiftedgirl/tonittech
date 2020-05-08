import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

import { graphql, useStaticQuery } from 'gatsby'


export default () => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark {
              edges {
                node {
                id
                  frontmatter{
                    title
                    date(formatString:"MM YYYY DD")
                  }
              
                }
              }
            }
          }
        `

    )
    const posts = allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
            <h1>{node.frontmatter.title}</h1>
            <p>{node.frontmatter.date}</p>


        </article>
    ))

    return(
        <Layout>
        <h1>
            Blog
            { posts }
        </h1>
        <Link to="/contact">Contact</Link>
    </Layout>
    ) 
}