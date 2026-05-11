import { useState } from "react";
import styles from './styles/Home.module.css'
import Image from "../assets/ispypic.jpg"
import Background from "../assets/background.png"

function Home() {
    return (
        <>
            <div className={ styles.bckgrdImageContainer}>
                <img className={ styles.bckgrdImage } src={ Background } alt="" />
                <div className={styles.imageContainer}>
                    <img className={ styles.image } src={ Image } alt="" />
                </div>
            </div>
            
        </>
    )
}

export default Home