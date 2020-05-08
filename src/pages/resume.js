import React from 'react'
import Layout from'../components/Layout'
import styles from '../css/resume.css'

export default (props) => {
return (
    <Layout>
<section className={styles.resume}>
    <h1 className="restitle"> Professional Highlights</h1>
    <div className="borderres">
    <iframe title="resume" width="80%" height="500" src="https://www.docdroid.net/YbJUAui/toni-horne-full-stack-resume-2-pdf" frameborder="90" allowtransparency allowfullscreen ></iframe>
    </div>
    </section>
    </Layout>
    )
}