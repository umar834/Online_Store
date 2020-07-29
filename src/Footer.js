import React from 'react'
import styles from './footer.module.css'
import logo from './images/Umaas.png'

function Footer() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} />
            <h4 className={styles.madeby}>Made By Umar Gulzar</h4>
        </div>
    )
}

export default Footer
