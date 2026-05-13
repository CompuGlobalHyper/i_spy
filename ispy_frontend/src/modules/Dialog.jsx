import { useState } from "react"
import styles from './styles/Dialog.module.css'
import { useEffect } from "react"

function Dialog({ messages = [] }) {
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.message + ' ' + styles.op0}>{messages[0]}</div>
                <div className={styles.message + ' ' + styles.op1}>{messages[1] ?? ''}</div>
                <div className={styles.message + ' ' + styles.op2}>{messages[2] ?? ''}</div>
                <div className={styles.message + ' ' + styles.op3}>{messages[3] ?? ''}</div>
            </div>
        </>
    )
    
}

export default Dialog