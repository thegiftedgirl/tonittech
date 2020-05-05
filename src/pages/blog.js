import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'


export default () => {
    return(
        <Layout>
        <h1>
            Blog
        </h1>
        <Link to="/contact">Contact</Link>
    </Layout>
    ) 
}