import React from 'react'
import styles from './footer.module.scss'



export default () => {
    return(
        <footer className={styles.footer}>
            <p> Toni Horne - Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}