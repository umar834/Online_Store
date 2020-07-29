import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Nav/Navbar'
import Footer from './Footer';
import styles from './main.module.css'

function Main() {
    return (
        <div>
            <div className={styles.header}>
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main
