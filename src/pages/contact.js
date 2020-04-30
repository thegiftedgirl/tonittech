import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => {
return (
    <Layout> 
        <h2> Contact Me </h2>
        <p> here are my deets </p>
        <Link to="/about">back to my bio</Link>
    </Layout>
    
    )
}