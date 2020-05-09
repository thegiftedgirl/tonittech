import React from 'react'

import { Link } from 'gatsby'
import styles from './header.module.scss'
import largelanding from '../../images/largelanding.png'

export default () => {
    return(
        <header className={styles.header}>
            <div><img src={largelanding} className="devlogo"/></div>
            <ul>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/'>Home</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/about'>About </Link>
                </li>
                 <li>
                    <Link activeClassName={styles.navItemActive} to='/resume'>Resume</Link>
                </li>
                  <li>
                    <Link activeClassName={styles.navItemActive} to='project'>Projects</Link>
                </li>  
                <li>
                    <Link activeClassName={styles.navItemActive} to='/contact'>Contact</Link>
                </li>     
            </ul>
        </header>
    )
}

