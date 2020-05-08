/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`,
         
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
              },
            },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                path: `${__dirname}/src/`
              },
            },   
            `gatsby-transformer-remark`,  
            {
              resolve: `gatsby-source-github-api`,
              options: {
                // url: API URL to use. Defaults to  
                url: 'https://api.github.com/graphql',
          
                // token: required by the GitHub API
                token: 'fcdf51c238c30a4a50f1364541d9c6fcdc2972af',
          
        
            }
            }
          
        ],
      }         
