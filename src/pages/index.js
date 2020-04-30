import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => {
    return (
        <Layout>
            <h2>Hey You COOL Cats  KITTENS </h2>
                <p>Hi my name is Toni</p>
            
            <Link to='/contact'> Contact Me </Link>
        </Layout>    
    )
}