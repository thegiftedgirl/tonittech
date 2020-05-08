import React from 'react'

import { Link } from 'gatsby'
import styles from './header.module.scss'

export default () => {
    return(
        <header className={styles.header}>
            <h1>The Dynamic Dev</h1>
            <ul>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/'>Home</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/about'>About Toni</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/contact'>Contact</Link>
                </li>
            
                <li>
                    <Link activeClassName={styles.navItemActive} to='./resume'>Resume</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to='./project'>Projects</Link>
                </li>     
            </ul>
        </header>
    )
}