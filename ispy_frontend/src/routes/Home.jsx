import { useState } from "react";
import styles from './styles/Home.module.css'
import Image from "../assets/ispypic.jpg"

function Home() {
    return (
        <>
            <div className={styles.imageContainer}>
                <img className={ styles.image } src={ Image } alt="" />
            </div>
        </>
    )
}

export default Home