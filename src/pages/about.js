import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => {
    return(
        <Layout>
            <h1>About Toni</h1>
            <p>Im a cool cat amongst all these kittens</p>
            <Link to="/contact">Contact</Link>
        </Layout>


    )
}


