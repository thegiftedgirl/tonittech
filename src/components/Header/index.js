import React from 'react'

import { Link } from 'gatsby'
import styles from './header.module.scss'

export default () => {
    return(
        <header className={styles.header}>
            <h1>The Beans</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Toni</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </header>
    )
}