import React from 'react'

import { Link } from 'gatsby'
import styles from './header.module.scss'
import dynamicdev2 from '../../images/dynamicdev2.png'

export default () => {
    return(
        <header className={styles.header}>
            <div><img src={dynamicdev2} className="devlogo"/></div>
            <ul>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/'>Home</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/about'>About </Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to='/contact'>Contact</Link>
                </li>

                <li>
                    <Link activeClassName={styles.navItemActive} to='/resume'>Resume</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to='project'>Projects</Link>
                </li>     
            </ul>
        </header>
    )
}

