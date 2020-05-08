import React from 'react'

import Footer from '../Footer'
import Header from '../Header'


import '../../css/background-image.css'
import '../../styles/reset.scss'
import styles from './layout.module.scss'

export default (props) => {
  return(
    <div className={styles.container}>  
       <Header />
         <main>
             {props.children}
            </main>  
        <Footer />
    </div>
  )
}